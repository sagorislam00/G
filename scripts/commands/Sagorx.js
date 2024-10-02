const fs = require("fs");
module.exports = {
  config:{
	name: "sagorno",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf("mahiya")==0 || body.indexOf("sumi")==0 || body.indexOf("আবিরা")==0 || body.indexOf("mim")==0) {
		var msg = {
				body: "𝐌𝐃 𝐉𝐀𝐇𝐈𝐃𝐔𝐋 𝐈𝐒𝐋𝐀𝐌 𝐒𝐀𝐆𝐎𝐑",
				attachment: fs.createReadStream(__dirname + `/Joy/tafriyaefa.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
