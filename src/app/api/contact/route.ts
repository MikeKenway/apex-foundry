import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Please fill in all required fields' }),
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Apex Foundry <hello@apexfoundry.gg>',
      to: 'hello@apexfoundry.gg',
      subject: `New Contact Form Submission: ${subject}`,
      react: ContactFormEmail({
        name,
        email,
        subject,
        message,
      }),
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch {
    return new Response(
      JSON.stringify({ error: 'Failed to send message' }),
      { status: 500 }
    );
  }
} 