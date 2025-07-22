import pool from '../config/db.js';
import sendMagiclink from '../utils/mailer.js';
import { v4 as uuidv4 } from 'uuid';

export const sendLink = async (req, res) => {
    const{email} = req.body;
    if(!email) {
        return res.status(400).json({error: 'Email is required'});
    }
    const token = uuidv4();
    const expiry = new Date(Date.now() + 10 * 60 * 1000);
    try {
        await pool.query("INSERT INTO magic_links(email,token,expires_at) VALUES($1,$2,$3)",[email,token,expiry]);
        await sendMagiclink(email, token);
        res.status(200).json({
            message:"Magic Link Sent to Your email."});
        }catch(error) {
        console.error('Error sending magic link:', error);
        res.status(500).json({error: 'Failed to send magic link'});
        }
    };
    export const verifyToken = async(req, res) =>{
        const{token}= req.query;
        try{
            const result = await pool.query("SELECT * FROM magic_links WHERE token = $1", [token]);
         
            if(result.rows.length === 0) {
                return res.status(400).json({error:"Invalid or expired token"});
            }
            const record = result.rows[0];
            
            if (new Date() > record.expires_at) {
                return res.status(400).json({error: "Token epxired"});
            }
            await pool.query("DELETE FROM magic_links WHERE token =$1", [token]);

            res.status(200).json({
                message: "Token Verified Successfully",email: record.email
            });
        }catch(err) {
            res.status(500).json({
                error:"Internal Server Error"
            });
        }
    };