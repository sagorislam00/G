module.exports.config = {
  name: "logo",
  version: "1.0.0",
  permission: 0,
  credits: "farhan",
  description: "Random sad logo",
  prefix: true,
  category: "Media",
  usages: "logo",
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

  var hi = ["--যে কোনো logo লাগলে ইনবক্স 💕🌸 --SaAor-IsLam--"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
    "https://i.imgur.com/uv07Hr2.jpeg",
    "https://i.imgur.com/KrtK06U.jpeg",
    "https://i.imgur.com/oCKZImX.jpeg",
    "https://i.imgur.com/3E6gwYd.jpeg",
    "https://i.imgur.com/zoJ0En0.jpeg",
    "https://i.imgur.com/SnxqxeK.jpeg",
    "https://i.imgur.com/2utDMyQ.jpeg",
    "https://i.imgur.com/AYyLoMn.jpeg",
    "https://i.imgur.com/DCHuVzy.jpeg"
  ];

  var callback = () => {
    api.sendMessage({ body: `「 ${know} 」`, attachment: fs.createReadStream(__dirname + "/cache/15.mp4") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));
  };

  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/15.mp4")).on("close", () => callback());
};
  
