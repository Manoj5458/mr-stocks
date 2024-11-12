// pages/api/upstoxCallback.js
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("Authorization code missing");
  }

  try {
    // Exchange authorization code for access token
    const tokenResponse = await axios.post(
      "https://api.upstox.com/index/oauth/token",
      {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: process.env.NEXT_PUBLIC_UPSTOX_REDIRECT_URI,
        client_id: process.env.NEXT_PUBLIC_UPSTOX_CLIENT_ID,
        client_secret: process.env.UPSTOX_CLIENT_SECRET,
      },
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const { access_token, refresh_token } = tokenResponse.data;

    // Set the access token in a secure HTTP-only cookie or store it in session
    res.setHeader(
      "Set-Cookie",
      `upstoxToken=${access_token}; HttpOnly; Path=/; Secure;`
    );
    res.redirect("/dashboard"); // Redirect to a protected page after login
  } catch (error) {
    console.error("Error fetching access token:", error);
    res.status(500).send("Error fetching access token");
  }
}
