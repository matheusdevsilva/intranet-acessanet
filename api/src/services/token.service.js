
import jwt from "jsonwebtoken"

const jwtSecret = "segredo_super_forte"

const  generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    jwtSecret,
    { expiresIn: "1d" }
  );
};
export default generateToken