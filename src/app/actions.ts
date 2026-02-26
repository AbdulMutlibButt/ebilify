"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Server-side validation for all fields
  if (!firstName || !lastName || !phone || !email || !subject || !message) {
    return {
      success: false,
      error: "All fields are required.",
    };
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Invalid email address.",
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Ebilify Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL ?? "delivered@resend.dev"],
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
              .header { background: linear-gradient(135deg, #7F00D4 0%, #4B0082 100%); color: white; padding: 30px; text-align: center; }
              .header h2 { margin: 0; font-size: 24px; letter-spacing: 1px; }
              .content { padding: 30px; background-color: #ffffff; }
              .field { margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 15px; }
              .field:last-child { border-bottom: none; }
              .label { font-weight: bold; color: #7F00D4; text-transform: uppercase; font-size: 12px; margin-bottom: 5px; display: block; }
              .value { color: #2d3748; font-size: 16px; }
              .message-box { background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #7F00D4; margin-top: 10px; }
              .footer { background-color: #f4f4f4; color: #777; padding: 15px; text-align: center; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Connection Request</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Full Name</span>
                  <span class="value">${firstName} ${lastName}</span>
                </div>
                <div class="field">
                  <span class="label">Email Address</span>
                  <span class="value">${email}</span>
                </div>
                <div class="field">
                  <span class="label">Phone Number</span>
                  <span class="value">${phone}</span>
                </div>
                <div class="field">
                  <span class="label">Subject</span>
                  <span class="value">${subject}</span>
                </div>
                <div class="field">
                  <span class="label">Message</span>
                  <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
                </div>
              </div>
              <div class="footer">
                &copy; ${new Date().getFullYear()} Ebilify. All rights reserved.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (err: any) {
    console.error("Submission Error:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}
