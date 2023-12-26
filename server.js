const express =require("express");
const PORT =process.env.PORT || 3000;
const app =express();


app.get('/', (req,res,next)=>{
    res.send("Hello saif");
});

app.post('/',(req,res,next)=>{
    res.send("Hello mosrati");
});

app.listen(PORT, () => {
    console.log("Server running on port"+PORT);
})

/*app.post("/login", async (req, res) => {
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
  });*/


  /*const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();*/
  

  //tetst

