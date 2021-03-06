const Discord = require('discord.js');
const handler = require('./handler');
const Worker = require('./worker');
const config = require('./config');

(async () => {
  // Postgres
  require('./models');

  // Worker
  const worker = new Worker();
  worker.start();

  // Discord
  const client = new Discord.Client();

  client.once('ready', () => {
    console.log('Ready!');
    client.user.setPresence({ activity: { name: '!help for help' }, status: 'idle' })
  });

  client.on('message', handler);

  client.login(config.discordToken);
})();
