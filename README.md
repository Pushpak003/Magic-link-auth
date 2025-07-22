# 🔐 Magic Link Auth - Node.js

Simple magic link authentication system using Node.js, PostgreSQL, and Nodemailer.

## 📦 Setup

1. Clone the repo  
2. Install dependencies  
3. Create `.env` file:

```env
PORT=3000
DATABASE_URL=your_pg_url
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
BASE_URL=your_ngrok_or_deployed_url
```
## Run the app
``` bash
npm start
```
## 📩 Endpoints
POST /send-link → Send magic link to email

GET /verify?token=... → Verify token and return email

✅ Token expires in 10 minutes
✅ Works with Gmail app password
