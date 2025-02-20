const { NotFound } = require("http-errors");

const { User } = require("../../models");

const verify = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verifyToken: verificationToken });

  if (!user) {
    throw NotFound();
  }

  await User.findByIdAndUpdate(user._id, { verify: true, verifyToken: null });

  res.json({
    status: "succes",
    code: 200,
    message: "Email success verified",
  });
};

module.exports = verify;
