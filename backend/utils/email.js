const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // If no SMTP credentials are provided, just log the email to the console instead of timing out
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('\n======================================================');
    console.log('⚠️ NO SMTP CREDENTIALS FOUND - EMAIL NOT SENT');
    console.log('======================================================');
    console.log(`To: ${options.email}`);
    console.log(`Subject: ${options.subject}`);
    console.log('------------------------------------------------------');
    console.log(options.message);
    console.log('======================================================\n');
    return;
  }

  const isGmail = process.env.EMAIL_HOST.toLowerCase().includes('gmail');
  
  const transporterConfig = {
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      // Do not fail on invalid/self-signed certs (common issue on cloud hosts/proxies)
      rejectUnauthorized: false,
    },
  };

  if (isGmail) {
    // Gmail service preset is more reliable on cloud platforms like Railway
    transporterConfig.service = 'gmail';
  } else {
    transporterConfig.host = process.env.EMAIL_HOST;
    transporterConfig.port = parseInt(process.env.EMAIL_PORT, 10) || 587;
    transporterConfig.secure = process.env.EMAIL_SECURE === 'true';
  }

  try {
    const transporter = nodemailer.createTransport(transporterConfig);

    const mailOptions = {
      from: `MyCampusRide <${process.env.EMAIL_FROM || 'noreply@mycampusride.com'}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error('SMTP Transport/Sending Error details:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE,
      user: process.env.EMAIL_USER,
      errorMessage: error.message,
      errorCode: error.code,
      errorStack: error.stack
    });
    throw error;
  }
};

module.exports = sendEmail;

