const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();


app.post("/login", async (req, res) => {
    const { iduser, password } = req.body;
    const user = await User.findOne({
      where: {
        iduser,
      },
    });
    if (!user) return res.sendStatus(401);
    if (!(await bcrypt.compare(password, user.password)))
      return res.sendStatus(401);
  
    res.json({
      token: jwt.sign(
        {
          userId: user.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "5 jours",
        }
      ),
    });
  });
  