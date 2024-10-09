import { Injectable } from '@nestjs/common';
import { setVapidDetails, sendNotification } from 'web-push';

const vapidKeys = {
  publicKey: process.env.FIREBASE_PUBLIC_KEY,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
};

setVapidDetails('mailto:', vapidKeys.publicKey, vapidKeys.privateKey);

const pushSubscription = {
  endpoint: '',
  keys: {
    auth: '',
    p256dh: '',
  },
};

@Injectable()
export class NotificationService {
  // constructor() {}

  submit() {
    const payload = JSON.stringify({ title: '', body: '' });
    sendNotification(pushSubscription, payload)
      .then((result) => console.log('Push sent: ', result))
      .catch((err) => console.log('Error sendinng push: ', err));
  }
}
