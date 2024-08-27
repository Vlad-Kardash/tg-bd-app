const TelegramBot = require("node-telegram-bot-api");
const webAppUrl = "https://frabjous-puffpuff-197f0f.netlify.app/";
const token = "7253424970:AAG6I5XekOwXDnG3x76jSuqIb5zTfoggkeA";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === "/start") {
    await bot.sendMessage(chatId, "Welcome to Bot YourDailyHoroscope", {
      reply_markup: {
        keyboard: [[{ text: "Horoscope", web_app: { url: webAppUrl } }]],
      },
    });
  }

  await bot.sendMessage(chatId, "Click on the button", {
    reply_markup: {
      inline_keyboard: [[{ text: "Horoscope", web_app: { url: webAppUrl } }]],
    },
  });
});
