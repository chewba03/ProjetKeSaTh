const connection = require("./models/db");
require("./models/Profile");
require("./models/User");
require("./models/Tournament");
require("./models/Skin");

connection
  .sync({ alter: true })
  .then(() => console.log("Database synced"))
  .then(() => connection.close());
