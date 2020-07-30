const { config } = require("vue/types/umd");

const utils = require("./utils");
const config = require("../config");
const isProdoction = process.env.NODE_ENV === "production"; // 判断是否是生产环境
const sourceMapEnabled = isProdoction

module.exports = {
  
}