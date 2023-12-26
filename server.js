const express =require("express");
const PORT =process.env.PORT || 3000;
const app =express();

const SecurityRouter = require("./Route/security");
const UsersRouter = require("./Route/R_User");
const ProfileRouter = require("./Route/R_Profile");
const SkinRouter = require("./Route/R_skin");
const TournamentRouter = require("./Route/R_tournament");



app.use(SecurityRouter);
app.use(UsersRouter);
app.use(ProfileRouter);
app.use(SkinRouter);
app.use(TournamentRouter);




/*app.get("/", (req, res, next) => {
  res.send("Hello World!" + JSON.stringify(req.query));
});

app.post("/", (req, res, next) => {
  res.send("Hello World! from POST" + JSON.stringify(req.body));
});

app.get('/', (req,res,next)=>{
    res.send("Hello saif");
});

app.post('/',(req,res,next)=>{
    res.send("Hello mosrati");
});

app.listen(PORT, () => {
    console.log("Server running on port"+PORT);
})
*/
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


  const SecurityRouter = require("./Route/security");
  const UsersRouter = require("./Route/R_User");
  const ProfileRouter = require("./Route/R_Profile");
  const SkinRouter = require("./Route/R_skin");
  const TournamentRouter = require("./Route/R_tournament");