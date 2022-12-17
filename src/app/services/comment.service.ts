import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environments';
import { Comment } from '../interfaces/Comment';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseApiUrl = enviroment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  create(data: Comment): Observable<Response<Comment>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.http.post<Response<Comment>>(url, data);
  }
}
