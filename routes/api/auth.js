const express = require("express");

const {
  controllerWrapper,
  validation,
  authenticate,
} = require("../../middlewares");
const { joiSchema } = require("../../models/user");
const { auth: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(joiSchema), controllerWrapper(ctrl.signup));

router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login));

router.get("/current", authenticate, controllerWrapper(ctrl.getUser));

router.get("/logout", authenticate, controllerWrapper(ctrl.logout));

module.exports = router;
