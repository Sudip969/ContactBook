const jwt = require("jsonwebtoken");
function jwtToken({ user_id, user_name, user_email }) {
  const user = { user_id, user_name, user_email };
  const accessToken = jwt.sign(user, "mysecrettoken");
  return accessToken;
}

module.exports = jwtToken;
