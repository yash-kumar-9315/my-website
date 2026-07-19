import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // TODO: wire real email service here (Resend, Nodemailer, etc.)
  console.log("New contact message:", { name, email, message });

  return NextResponse.json({ success: true });
}