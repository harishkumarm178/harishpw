var push = require('web-push');

let vapidKeys = {
    publicKey: 'BNFmoFItIPOQBQ4Z8ol9SNbzoZNzRbT--XrWlCWq_lEF97k2vanzyu__W8gk-BK6o-ctcZdKPZc70B2NGN8DEeY',
    privateKey: 'M4gtHHAHsimKgLXlmfimYkaCpLK9c-sjsRUUlWYkrbo'
  }

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub= {};

push.sendNotification(sub, 'test message')
