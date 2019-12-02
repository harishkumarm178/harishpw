var push = require('web-push');

let vapidKeys = {
    publicKey: 'BNFmoFItIPOQBQ4Z8ol9SNbzoZNzRbT--XrWlCWq_lEF97k2vanzyu__W8gk-BK6o-ctcZdKPZc70B2NGN8DEeY',
    privateKey: 'M4gtHHAHsimKgLXlmfimYkaCpLK9c-sjsRUUlWYkrbo'
  }

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub= {"endpoint":"https://fcm.googleapis.com/fcm/send/fHzYuuaxitE:APA91bElINMox6d9mgi6WNbN0IJU2DnnzN-gGfHrSeAmSMyhUh3og1X3T-XnkS0t_x_3FhmCYghTn-K6PQLs_AHwW7skWKcKk6SWEf1aEAzJDJXAmGNBD3c_jmHpupvgt8ZBbbS8VvcE","expirationTime":null,"keys":{"p256dh":"BOBDmltgbAIyAGrtS7vjCSkx5om5Md2DSAQ_4mVazcANQ_bqiG7oYpEyz_PVJCN0YYj8Hqepiu3f0Bi_40yBUSw","auth":"l1SExMfK8yjt0fXZrvXILQ"}};

push.sendNotification(sub, 'test message')
