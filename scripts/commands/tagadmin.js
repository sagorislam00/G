const fs = require('fs');
const moment = require('moment-timezone');
module.exports.config = {
  name: "tagadmin",
  version: "1.0.2",
  permission: 0,
  prefix: true,
  credits: "sagor",
  description: "info",
  category: "user",
  usages: "",
    cooldowns: 5,
};

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads, args }) {
let uid = event.senderID;
var msg = [`ljkj`];
    const { threadID, messageID, body } = event;
    switch (handleReply.type) {
        case "tagadmin": {
            let name = await Users.getNameUser(handleReply.author);
            api.sendMessage(`==== [ Admin Phản Hồi ] ==== \n──────────────────\n💬 Nội dung: ${body}\n👤 Admin: ${name || "Người dùng facebook"}\n🌐 Facebook: https://www.facebook.com/profile.php?id=${event.senderID}\n👑 Nơi gửi: ${event.isGroup == true ? 'Nhóm ' + global.data.threadInfo.get(event.threadID).threadName: 'từ cuộc trò chuyện riêng với bot '} \n⏰ Time: ${moment().tz("Asia/Dhaka").format("HH:mm:ss - DD/MM/YYYY")}\n→ Reply tin nhắn ( Phản hồi ) về admin `, handleReply.threadID, (err, info) => {
                if(err) console.log(err)
                else {
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: "reply",
                        messageID: info.messageID,
                        messID: messageID,
                        threadID
                    })
                }
            }, handleReply.messID);
            break;
        }
        case "reply": {
            let name = await Users.getNameUser(event.senderID);
            api.sendMessage(`===== 𝗨𝗦𝗘𝗥 𝗙𝗘𝗘𝗗𝗕𝗔𝗖𝗞 =====\n──────────────────\n💬 Nội dung: ${body}\n👤 Tên: ${name || "Người dùng facebook"}\n👨‍👩‍👧‍👦 Box : ${(await Threads.getInfo(threadID)).threadName || "Tên nhóm không tồn tại"}\n⏰ Time: ${moment().tz("Asia/Dhaka").format("HH:mm:ss - DD/MM/YYYY")}\n→ Reply tin nhắn ( phản hồi ) lại người tag`, handleReply.threadID, (err, info) => {
                if(err) console.log(err)
