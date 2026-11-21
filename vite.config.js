import process from "node:process";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import nodemailer from "nodemailer";

function contactApiPlugin() {
  return {
    name: "contact-api-plugin",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.method === "POST" && req.url === "/api/contact") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk;
          });
          req.on("end", async () => {
            try {
              const data = JSON.parse(body || "{}");
              const { name, email, subject, message } = data;

              if (!name || !email || !message) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: false, error: "Missing required fields" }));
                return;
              }

              const env = loadEnv("development", process.cwd(), "");
              const smtpUser = env.SMTP_USER || process.env.SMTP_USER || "luckyghai.wr@gmail.com";
              const smtpPass = env.SMTP_PASS || process.env.SMTP_PASS;

              const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                  user: smtpUser,
                  pass: smtpPass,
                },
              });

              await transporter.sendMail({
                from: `"Portfolio Contact Form" <${smtpUser}>`,
                to: smtpUser,
                replyTo: email,
                subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] Message from ${name}`,
                text: `New message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || "(None)"}\n\nMessage:\n${message}`,
                html: `
                  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
                    <h2 style="color: #4f46e5; margin-top: 0; font-size: 20px;">New Portfolio Inquiry</h2>
                    <p style="margin: 6px 0; font-size: 14px;"><strong>Sender Name:</strong> ${name}</p>
                    <p style="margin: 6px 0; font-size: 14px;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
                    <p style="margin: 6px 0; font-size: 14px;"><strong>Subject:</strong> ${subject || "(No subject provided)"}</p>
                    <div style="margin-top: 18px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #4f46e5; border-radius: 6px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #334155;">${message}</div>
                    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0 12px;" />
                    <p style="font-size: 11px; color: #94a3b8; margin: 0;">Sent directly from your personal portfolio website.</p>
                  </div>
                `,
              });

              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ success: true, message: "Email sent successfully" }));
            } catch (err) {
              console.error("Local dev SMTP error:", err);
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ success: false, error: "Failed to send email via SMTP" }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), contactApiPlugin()],
});
