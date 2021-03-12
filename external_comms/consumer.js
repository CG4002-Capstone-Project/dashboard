require('dotenv').config();
const amqp = require('amqplib/callback_api');

const CLOUD_AMQP_URL = process.env.CLOUDAMQP_URL;

amqp.connect(CLOUD_AMQP_URL, function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'pdfprocess';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
  });
});