// Logger loading must be the fist statement
const logger = require("./config/logging-client");


server
  .listen({
    port: ,
    path: ,
  })
  .then(({ url }) => {
    logger.info(`Server ready at ${url}`);
  });
