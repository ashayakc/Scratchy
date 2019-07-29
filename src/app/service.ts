import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic NTViZjdkNmQtZDJhMy00ZjE5LWFhNzktNWIyMjdmZjU1ZjFm'
    })
  };

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
      }), this.httpOptions)
      .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }

  updatePayload(payload: any) {
    localStorage.setItem('payload', payload);
  }

  getPayload() {
    return localStorage.getItem('payload');
  }
}