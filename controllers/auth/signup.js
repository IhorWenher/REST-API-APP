const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { User } = require("../../models");
const { sendEmail } = require("../../helpers");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Already registered");
  }

  const avatarURL = gravatar.url(email);
  const verifyToken = nanoid();

  const newUser = new User({
    email,
    avatarURL,
    verifyToken,
  });
  newUser.setPassword(password);
  await newUser.save();

  const mail = {
    to: email,
    subject: "Confirm your registration",
    html: `<a target="_blank" href="https://node-rest-api-app-1.herokuapp.com/api/users/verify/${verifyToken}">Click to continue registration</a>`,
  };

  sendEmail(mail);

  res.status(201).json({
    status: "success",
    code: 201,
    message: "Signup success",
  });
};

module.exports = signup;
