import twilio from 'twilio';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    const phoneNumber = await req.json()

    try {
        const client = twilio(accountSid, authToken);

        const message = await client.messages.create({
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            from: '+18149759803',
            to: '+63' + phoneNumber
        });

        const messageSent = message.sid

        return NextResponse.json({ msg: "Successfuly Sent ", messageSent, status: 200 })
    } catch (error) {
        console.error('Error sending SMS:', error);
        return NextResponse.json({ msg: "Failed", error, status: 500 })
    }
}
