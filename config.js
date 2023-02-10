/********************
 * Config Main File *
 ********************/
module.exports = {
  PORT: process.env.PORT || 3000,
  DIR: __dirname,
  CLIENT: __dirname + "/client",
  MODULES: __dirname + "/node_modules"
};