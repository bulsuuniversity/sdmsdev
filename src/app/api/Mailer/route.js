import transporter from "@/app/libs/mailer";
import { NextResponse } from "next/server";

export async function POST(req) {

    const emailData = await req.json()
    function generateRandomKey() {
        const randomKey = Math.floor(100000 + Math.random() * 900000); // Generates a random number between 100000 and 999999
        return randomKey.toString();
    }
    const sixDigitRandomKey = generateRandomKey();
    try {
        transporter.sendMail({
            from: "Student Discipline Management System",
            to: emailData.email,
            subject: emailData.subject,
            text: emailData.message + sixDigitRandomKey,
        });

        return NextResponse.json({ msg: "Successfuly Sent ", key: sixDigitRandomKey, status: 200 })
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: "Error on '/api/mail': " + error, status: 400 })
    }
}
