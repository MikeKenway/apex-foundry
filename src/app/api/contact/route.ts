import { Resend } from 'resend';
import ContactFormEmail from '@/components/emails/contact-form';
import ContactConfirmation from '@/components/emails/contact-confirmation';

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

    // 1. Send internal email to site owner
    const ownerSend = await resend.emails.send({
      from: 'Apex Foundry <noreply@notifications.apexfoundry.gg>',
      to: 'hello@apexfoundry.gg',
      subject: `New Contact Form Submission: ${subject}`,
      react: ContactFormEmail({ name, email, subject, message }),
    });

    // 2. Send confirmation to user
    const userSend = await resend.emails.send({
      from: 'Apex Foundry <noreply@notifications.apexfoundry.gg>',
      to: email,
      subject: 'We’ve received your message!',
      react: ContactConfirmation({ name, email, subject, message }),
    });

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          ownerSend,
          userSend,
        },
      }),
      { status: 200 }
    );
  } catch {
    return new Response(
      JSON.stringify({ error: 'Failed to send message' }),
      { status: 500 }
    );
  }
}
