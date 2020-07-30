const merge = require("webpack-merge");
const prodctionEnv = {
  NODE_ENV: "\"production\""
}

module.exports = merge(prodctionEnv, {
  NODE_ENV: "\"development\""
})