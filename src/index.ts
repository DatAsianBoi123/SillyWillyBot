import { BurgerClient } from 'burgerclient';
import { GatewayIntentBits } from 'discord.js';
import path from 'path';
import 'dotenv/config';

const client = new BurgerClient({
  intents: [GatewayIntentBits.Guilds],
  testGuild: '942523909796921424',
  typescript: process.env.ENV === 'DEV' ? true : false,
});

client.onReady(async readyClient => {
  await client.registerAllCommands(path.resolve(__dirname, 'commands'));
  await client.updateCommands();
  await client.updatePermissions();

  BurgerClient.logger.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  await client.resolveCommand(interaction);
});

client.login(process.env.TOKEN as string);
