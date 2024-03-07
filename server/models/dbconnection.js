const { createClient } = require("redis");

const redisDB = createClient({
  url: "redis://@192.168.1.41:6379",
});

async function connect() {
  await redisDB.connect((err) => {
    if (err) {
      throw new Error(err);
    }
    console.log("connected to redis");
    return redisDB;
  });
}
const connectionToRedis = connect();
module.exports = connectionToRedis;
