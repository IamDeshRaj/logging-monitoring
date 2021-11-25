// Add this to the VERY top of the first file loaded in your app
const APM = require('elastic-apm-node').start({

  // Override the service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: '',
  
  // Use if APM Server requires a secret token
  secretToken: '',
  
  // Set the custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200',
  
  // Set the service environment
  environment: 'dev'
});

const winston = require('winston');
const ecsFormat = require('@elastic/ecs-winston-format')
const { ElasticsearchTransport } = require('winston-elasticsearch');

var esTransportOpts = {
  apm: APM,
  level: 'info',
  index: 'xseed-sis-backend',
  clientOpts: { node: "http://localhost:9200" }
};

module.exports = winston.createLogger({
  format: ecsFormat(),
  transports: [
    new ElasticsearchTransport(esTransportOpts)
  ]
});
