const connection = require("./models/db");
require("./models/Profile");
require("./models/User");
require("./models/tournament");
require("./models/Skin");
require("./models/Party");
connection
  .sync({ alter: true })
  .then(() => console.log("Database synced"));

