import { ICommand } from 'burgerclient';
import { SlashCommandBuilder } from 'discord.js';

const command: ICommand = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pings the bot'),

  type: 'GUILD',

  listeners: {
    onExecute: async ({ interaction }) => {
      interaction.reply('Pong!');
    },
  },
};

export default command;
