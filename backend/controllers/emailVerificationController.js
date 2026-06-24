const crypto = require('crypto');
const User = require('../models/User');
const { asyncHandler } = require('../middleware/errorHandler');
const sendEmail = require('../utils/email');
const { getVerificationEmailHtml } = require('../utils/emailTemplates');

// @desc    Verify email address
// @route   GET /api/auth/verify-email/:token
// @access  Public
const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.params;

  // Hash token to compare with DB
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  const user = await User.findOne({
    verificationToken: hashedToken,
    verificationTokenExpires: { $gt: Date.now() }
  });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: 'Verification token is invalid or has expired'
    });
  }

  user.isVerified = true;
  user.verificationToken = undefined;
  user.verificationTokenExpires = undefined;
  
  // Set status active for student/admin if pending, drivers stay pending for admin approval
  if (user.role !== 'driver') {
    user.status = 'active';
  }

  await user.save();

  res.status(200).json({
    success: true,
    message: 'Email verified successfully. You can now log in.'
  });
});

// @desc    Resend email verification token
// @route   POST /api/auth/resend-verification
// @access  Public
const resendVerificationEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'Email address is required'
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'No account found with this email address'
    });
  }

  if (user.isVerified) {
    return res.status(400).json({
      success: false,
      message: 'This email address is already verified. You can log in.'
    });
  }

  // Email verification is disabled, just set the user as verified
  user.isVerified = true;
  await user.save();

  res.status(200).json({
    success: true,
    message: 'Email verification disabled. Your account has been verified successfully! Please log in.'
  });
});

module.exports = {
  verifyEmail,
  resendVerificationEmail
};
