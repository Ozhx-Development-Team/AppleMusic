// @API Imports
const ip = require('ip');

// @Startup Exports
module.exports = async (client) => {
  console.log(`[${new Date().toLocaleString()}] | Logged into discord as: ${client.user.tag}`);
  console.log(`[${new Date().toLocaleString()}] | Running on IP: ${ip.address()}`)
  console.log(`[${new Date().toLocaleString()}] | Connection ping is: ${client.ws.ping}`);
  console.log(`[${new Date().toLocaleString()}] | Completing startup...`);
  console.log(`[${new Date().toLocaleString()}] | ${client.user.username} Startup Is Now Completed`);
}