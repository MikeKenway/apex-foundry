import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactFormEmail } from '@/emails/contact-form-email'
import { render } from '@react-email/render'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    const emailComponent = ContactFormEmail({
      name,
      email,
      message,
    })

    const html = await render(emailComponent)

    await resend.emails.send({
      from: 'Apex Foundry <hello@apexfoundry.gg>',
      to: 'hello@apexfoundry.gg',
      subject: 'New Contact Form Submission',
      html,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
