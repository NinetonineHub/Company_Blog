import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, serviceInterested, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message || !serviceInterested) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "info@ninetoninehub.com";
    const companyDisplay = company && company.trim() ? company.trim() : "N/A";
    const subject = `New Project Inquiry — ${company && company.trim() ? company.trim() : name}`;

    const plainTextBody = `New Project Inquiry

Name:
${name}

Company / Brand:
${companyDisplay}

Email:
${email}

Phone / WhatsApp:
${phone}

Primary Service Interest:
${serviceInterested}

Project Brief / Objectives:
${message}`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #24191A; max-width: 600px; margin: 0 auto; border: 1px solid #5B0F1820; padding: 24px; border-radius: 12px; background-color: #FCF9F5;">
        <h2 style="color: #5B0F18; margin-top: 0; border-bottom: 2px solid #5B0F18; padding-bottom: 10px;">New Project Inquiry</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 180px; color: #6F6261;">Name:</td>
            <td style="padding: 8px 0; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6F6261;">Company / Brand:</td>
            <td style="padding: 8px 0;">${companyDisplay}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6F6261;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #5B0F18;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6F6261;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #5B0F18;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6F6261;">Primary Service Interest:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #5B0F18;">${serviceInterested}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #5B0F1820;">
          <p style="font-weight: bold; color: #6F6261; margin-bottom: 6px;">Project Brief / Objectives:</p>
          <div style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #5B0F1815; white-space: pre-wrap;">${message}</div>
        </div>
      </div>
    `;

    // Configure Nodemailer SMTP Transport using Environment Variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Nine to Nine Hub Website" <${smtpUser}>`,
        to: recipient,
        replyTo: email,
        subject: subject,
        text: plainTextBody,
        html: htmlBody,
      });

      console.log(`[Contact API] Email successfully sent to ${recipient} via SMTP (${smtpHost})`);
    } else {
      // Log submission for production record when SMTP env vars are not set
      console.log(`[Contact API] Form Submission Received for ${recipient}:`);
      console.log(plainTextBody);
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error: any) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your enquiry. Please try again or contact us directly at info@ninetoninehub.com" },
      { status: 500 }
    );
  }
}
