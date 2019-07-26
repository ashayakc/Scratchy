import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  sendMail(mailId: string, category: string) {
      this.http.post('http://localhost:5000/api/mail/send', {
          'mailId': mailId,
          'Category': category
      });
  }

  sendPushNotification(content: string) {
      this.http.post('https://onesignal.com/api/v1/notifications', JSON.stringify({
        "app_id": "18a75c9c-5d79-42fe-908e-1896f7481143",
        "included_segments": ["Subscribed Users"],
        "data": {"foo": "bar"},
        "contents": {"en": content}
      }));
  }

  updateGiftId(giftId: string) {
    localStorage.setItem('giftId', giftId);
  }

  getGiftId() {
    return localStorage.getItem('giftId');
  }
}