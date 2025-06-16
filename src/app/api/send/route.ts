import { Resend } from 'resend'
import ContactEmail from '@/components/emails/ContactEmail'
import { NextResponse } from 'next/server'
import { render } from '@react-email/render'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const html = render(ContactEmail(body))

    await resend.emails.send({
      from: 'Contact Form <noreply@notifications.apexfoundry.gg', 
      to: 'hello@apexfoundry.gg',
      subject: 'New Contact Form Submission',
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Email failed to send' }, { status: 500 })
  }
}
