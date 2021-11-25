// Logger loading must be the fist statement
const logger = require("./config/logging-client");

// Configure your server first, logger can be used to log the errors, info etc
server
  .listen({
    port: ,
    path: ,
  })
  .then(({ url }) => {
    logger.info(`Server ready at ${url}`);
  });
