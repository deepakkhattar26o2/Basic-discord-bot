const axios = require("axios");
require("dotenv").config();
const prefix = "gimme";

const complimentList = require("./complimentList").listo;

exports.onMessageCreate = async (msg) => {
  if (!msg.content.startsWith(prefix)) {
    return;
  }
  const args = msg.content.split(" ");
  args.shift();
  const command = args.join(" ").toLowerCase();
  if (command === "hi" || command === "hey") {
    msg.reply({
      content: "Hey!",
    });
  }
  if (command === "sheesh") {
    msg.reply({
      content: "SHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESH!!!!!!!!!",
    });
  }
  if (command === "a compliment") {
    msg.reply({
      content:
        complimentList[Math.floor(Math.random() * complimentList.length)],
    });
  }
  if (command === "meme") {
    try {
      let getMeme = async () => {
        let resp = await axios.get("https://meme-api.herokuapp.com/gimme");
        let Meme = resp.data.url;
        return Meme;
      };
      let MEME = await getMeme();
      msg.reply(MEME);
    } 
    catch (err) {
      msg.reply({
        content: "Enocuntered An Unexpected Error!!",
      });
    }
  }
};
