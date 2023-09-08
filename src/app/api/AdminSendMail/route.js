import transporter from "@/app/libs/mailer";
import { NextResponse } from "next/server";

export async function POST(req) {

    const emailData = await req.json()
    try {
        const mailed = await transporter.sendMail({
            from: "Student Discipline Management System",
            to: emailData.email,
            subject: emailData.subject,
            text: emailData.message,
            html: `<body style="background-color: #ffee58; margin: 0; padding: 0;">
            <table width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                <td align="center" style="background-color: #ffffff; padding: 20px;">
                 ${emailData.html}
                </td>
                <tr>
                <td align="center" style="background-color: #f0f0f0;">
                  <img src="cid:Logo" alt="Email Header" style="display: block; margin: 0 auto;">
                </td>
              </tr>
              </tr>
            </table>
          </body>` ,
            attachments: [
                {
                    filename: 'Logo.png',
                    path: 'public/Logo.png',
                    cid: 'Logo',
                },
            ],
        });
        return NextResponse.json({ status: 200, data: mailed })
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error, status: 400 })
    }
}
