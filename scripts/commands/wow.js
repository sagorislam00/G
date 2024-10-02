module.exports.config = {
  name: "wow",
  version: "1.0.0",
  permission: 0,
  credits: "farhan",
  description: "Random sad video",
  prefix: true,
  category: "Media",
  usages: "video",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];

  var hi = ["--আসলেই অনেক কষ্টের ভিডিও--Sagor-𝐈𝐬𝐥𝐚𝐦--"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
    "https://i.imgur.com/krml6VF.mp4",
    "https://i.imgur.com/MptQlaU.mp4",
    "https://i.imgur.com/1I04sTp.mp4",
    "https://i.imgur.com/1eqda3H.mp4",
    "https://i.imgur.com/1X0JbuT.mp4",
    "https://i.imgur.com/CVNBOeg.mp4",
    "https://i.imgur.com/hVFBByR.mp4",
    "https://i.imgur.com/J6t97Hm.mp4",
    "https://i.imgur.com/8aky4aK.mp4"
  ];

  var callback = () => {
    api.sendMessage({ body: `「 ${know} 」`, attachment: fs.createReadStream(__dirname + "/cache/15.mp4") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));
  };

  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/15.mp4")).on("close", () => callback());
};
