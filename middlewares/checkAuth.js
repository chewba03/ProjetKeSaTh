const jwt = require ("jsonwebtoken"); 

module.exports =({transient = false}={}) =>
  async function checkauth(req,res,next){
    const headerValue = req.headers.Authorisation ?? req.headers.authorization;
    if(!headerValue)return transient ? next() : res.sendStatus(401);
    const[type, token] = headerValue.split(/\s+/);
    if(type !== "Admin")return transient ? next() :  res.sendstatus(401);
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await UserActivation.findByPk(payload.UserId);
    next();
}