import nodemailer from 'nodemailer';

// Helper function to handle CORS and preflight requests
function setCorsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function POST(request) {
  const corsHeaders = setCorsHeaders();

  try {
    // Parse the incoming JSON data
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Setup Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send email using Nodemailer
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: `New message from ${name}: ${subject}`,
      html: `
        <p>You have a new contact form submission.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
        </ul>
        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    // Respond with success
    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}

// Handle preflight (OPTIONS) requests
export async function OPTIONS() {
  return new Response(null, {
    status: 204, // No content for preflight requests
    headers: setCorsHeaders(),
  });
}
