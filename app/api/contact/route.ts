import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    debugger
    const body = await req.json();
if (
  !body.name ||
  !body.email ||
  !body.service ||
  !body.details
) {
  return NextResponse.json(
    {
      success: false,
      message: "Missing required fields",
    },
    {
      status: 400,
    }
  );
}
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["karan021104@gmail.com"],
      subject: `New Inquiry - ${body.service}`,
      html: `
        <h2>New Contact Inquiry</h2>

        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Service:</strong> ${body.service}</p>

        <p><strong>Details:</strong></p>
        <p>${body.details}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}