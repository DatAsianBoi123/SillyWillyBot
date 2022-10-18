"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const burgerclient_1 = require("burgerclient");
const discord_js_1 = require("discord.js");
require("dotenv/config");
console.log(process.env.ENV);
const client = new burgerclient_1.BurgerClient({
    intents: [discord_js_1.GatewayIntentBits.Guilds],
    testGuild: '942523909796921424',
    typescript: process.env.ENV === 'DEV' ? true : false,
});
