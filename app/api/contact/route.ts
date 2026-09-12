import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      fullName,
      company,
      email,
      phone,
      serviceInterested,
      message,
      location,
      position,
      resume,
      type,
    } = body;

    // Extract sender information from either Contact or Career form
    const senderName = (name || fullName || "").trim();
    const senderEmail = (email || "").trim();
    const senderPhone = (phone || "").trim();
    const senderMessage = (message || "").trim();

    // Validate required fields
    if (!senderName) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!senderEmail || !/\S+@\S+\.\S+/.test(senderEmail)) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }
    if (!senderPhone) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }
    if (!senderMessage) {
      return NextResponse.json({ error: "Message content is required." }, { status: 400 });
    }

    // Determine inquiry type (Career vs Project Inquiry)
    const isCareer = type === "career" || Boolean(position);
    const subject = isCareer
      ? `New Job Application — ${position || "Team Role"} — ${senderName}`
      : `New Project Inquiry — ${company && company.trim() ? company.trim() : senderName}`;

    // Parse recipient email addresses from env var
    const rawRecipients =
      process.env.CONTACT_RECIPIENT_EMAIL ||
      "info@ninetoninehub.com,sales@ninetoninehub.com,Gm@ninetoninehub.com,rias@ninetoninehub.com";
    const recipientList = rawRecipients
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    // Build Plain Text Body
    let plainTextBody = "";
    if (isCareer) {
      plainTextBody = `New Career Job Application

Full Name:
${senderName}

Email Address:
${senderEmail}

Phone Number:
${senderPhone}

Location:
${location || "N/A"}

Applied Position:
${position || "N/A"}

Resume / Portfolio Attachment:
${resume || "Attached"}

Introduction / Cover Message:
${senderMessage}`;
    } else {
      plainTextBody = `New Project Inquiry

Name:
${senderName}

Company / Brand:
${company && company.trim() ? company.trim() : "N/A"}

Email Address:
${senderEmail}

Phone / WhatsApp:
${senderPhone}

Primary Service Interest:
${serviceInterested || "General Inquiry"}

Project Brief / Objectives:
${senderMessage}`;
    }

    // Build HTML Body
    let htmlBody = "";
    if (isCareer) {
      htmlBody = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #24191A; max-width: 600px; margin: 0 auto; border: 1px solid #5B0F1820; padding: 24px; border-radius: 12px; background-color: #FCF9F5;">
          <h2 style="color: #5B0F18; margin-top: 0; border-bottom: 2px solid #5B0F18; padding-bottom: 10px;">New Career Job Application</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px; color: #6F6261;">Full Name:</td>
              <td style="padding: 8px 0; font-weight: 600;">${senderName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6F6261;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${senderEmail}" style="color: #5B0F18;">${senderEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6F6261;">Phone Number:</td>
              <td style="padding: 8px 0;"><a href="tel:${senderPhone}" style="color: #5B0F18;">${senderPhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6F6261;">Location:</td>
              <td style="padding: 8px 0;">${location || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6F6261;">Applied Position:</td>
              <td style="padding: 8px 0; font-weight: 600; color: #5B0F18;">${position || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6F6261;">Resume File:</td>
              <td style="padding: 8px 0;">${resume || "Attached"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #5B0F1820;">
            <p style="font-weight: bold; color: #6F6261; margin-bottom: 6px;">Introduction / Cover Message:</p>
            <div style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #5B0F1815; white-space: pre-wrap;">${senderMessage}</div>
          </div>
        </div>
      `;
    } else {
      htmlBody = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #24191A; max-width: 600px; margin: 0 auto; border: 1px solid #5B0F1820; padding: 24px; border-radius: 12px; background-color: #FCF9F5;">
          <h2 style="color: #5B0F18; margin-top: 0; border-bottom: 2px solid #5B0F18; padding-bottom: 10px;">New Project Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px; color: #6F6261;">Name:</td>
              <td style="padding: 8px 0; font-weight: 600;">${senderName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6F6261;">Company / Brand:</td>
              <td style="padding: 8px 0;">${company && company.trim() ? company.trim() : "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6F6261;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${senderEmail}" style="color: #5B0F18;">${senderEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6F6261;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0;"><a href="tel:${senderPhone}" style="color: #5B0F18;">${senderPhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6F6261;">Primary Service Interest:</td>
              <td style="padding: 8px 0; font-weight: 600; color: #5B0F18;">${serviceInterested || "General Inquiry"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #5B0F1820;">
            <p style="font-weight: bold; color: #6F6261; margin-bottom: 6px;">Project Brief / Objectives:</p>
            <div style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #5B0F1815; white-space: pre-wrap;">${senderMessage}</div>
          </div>
        </div>
      `;
    }

    // SMTP Transport Configuration
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
    const smtpUser = process.env.SMTP_USER || "info@ninetoninehub.com";
    const smtpPass = process.env.SMTP_PASS;

    // Check if SMTP_PASS is missing or placeholder
    if (!smtpPass || smtpPass.includes("[info mailbox password") || smtpPass.trim() === "") {
      console.error("[Contact API Error]: SMTP_PASS environment variable is missing or unconfigured.");
      return NextResponse.json(
        {
          error:
            "SMTP password is missing or unconfigured on the server. Please enter the Hostinger info@ninetoninehub.com password in .env.local.",
        },
        { status: 500 }
      );
    }

    const isSecure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    await transporter.sendMail({
      from: `"Nine to Nine Hub Website" <${smtpUser}>`,
      to: recipientList.join(", "),
      replyTo: senderEmail,
      subject: subject,
      text: plainTextBody,
      html: htmlBody,
    });

    console.log(`[Contact API] Email successfully sent to [${recipientList.join(", ")}] via Hostinger SMTP (${smtpHost})`);

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error: any) {
    console.error("[Contact API Error]:", error?.message || error);
    return NextResponse.json(
      {
        error:
          "Something went wrong while sending your enquiry via email. Please check server credentials or contact info@ninetoninehub.com directly.",
      },
      { status: 500 }
    );
  }
}
