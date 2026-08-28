import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  return apiKey ? new Resend(apiKey) : null
}

export async function POST(request: NextRequest) {
  const resend = getResendClient()

  if (!resend) {
    return NextResponse.json(
      { error: 'Email service is temporarily unavailable. Please contact the clinic by WhatsApp.' },
      { status: 503 }
    )
  }
  try {
    const body = await request.json()
    const { name, email, phone, message, serviceType } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to clinic
    const clinicEmailPromise = resend.emails.send({
      from: 'noreply@elitedermacare.com',
      to: 'dermacareelite@gmail.com',
      subject: `New Inquiry from ${name} - Elite Derma Care`,
      html: `
        <h2>New Patient Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${serviceType || 'General inquiry'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>This message was sent from Elite Derma Care website: https://elitedermacare.vercel.app</p>
      `,
    })

    // Send confirmation email to user
    const userEmailPromise = resend.emails.send({
      from: 'Elite Derma Care <noreply@elitedermacare.com>',
      to: email,
      subject: 'We Received Your Inquiry - Elite Derma Care',
      html: `
        <h2>Thank You for Contacting Elite Derma Care</h2>
        <p>Hi ${name},</p>
        <p>We have received your inquiry and will get back to you within 24 hours.</p>
        <p><strong>Your Details:</strong></p>
        <ul>
          <li>Service Interest: ${serviceType || 'General inquiry'}</li>
          <li>Contact: ${email}</li>
        </ul>
        <p>If you have any urgent concerns, please call us directly or visit our clinic in Nugegoda, Sri Lanka.</p>
        <p>Best regards,<br>The Elite Derma Care Team</p>
      `,
    })

    await Promise.all([clinicEmailPromise, userEmailPromise])

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your inquiry has been sent successfully. Please check your email for confirmation.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
