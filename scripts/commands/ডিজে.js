const fs = require("fs");
module.exports = {
  config:{
  name: "ডিজে",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "ডিজে",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("cio")==0 || body.indexOf("ডিজে")==0 || body.indexOf("CIO")==0 || body.indexOf("ডিজ")==0) {
    var msg = {
        body: "লাগা ডিজে 😁",
        attachment: fs.createReadStream(__dirname + `/Nayan/cio.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🗣️", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
} 
