const Koa = require("koa");
const Router = require("koa-router");

module.exports.app = new Koa();
module.exports.router = new Router();