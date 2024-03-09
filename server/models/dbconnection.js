const { createClient } = require("redis");

const redisDB = createClient({
  url: "redis://@192.168.1.41:6379",
});

async function connect() {
  try {
    await redisDB.connect();
  } catch (e) {
    console.log("Ошибка подключения к БД");
  }

  redisDB.isReady && console.log("Connected to Redis");
  // redisDB.set("user1", "email@1.com");
}
connect();
module.exports = redisDB;
