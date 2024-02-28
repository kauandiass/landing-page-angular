import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewsletterResponse {
  name: string
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private endpoint = 'http://localhost:5161/v1/subscribes-newsletter';

  constructor(private http: HttpClient) { }

  sendData(name: string, email: string): Observable<NewsletterResponse> {
    const data = {name, email};

    return this.http.post<NewsletterResponse>(this.endpoint, data);
  }
}