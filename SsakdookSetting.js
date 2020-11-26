const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log('안녕하세요. 디스코드 전용 채팅봇 싹둑입니다.');
  console.log('Made by 빅스비애오');
});
 
client.on('message', message => {
  if (message.content === '!명령어') {
    message.reply('테스트');
  }
});
 
client.login('NzgxNDg1NzI1MTYwOTY0MTY2.X7-VTA.fYpqVitzQaJ7A5sXtIgXM_ERUEI');