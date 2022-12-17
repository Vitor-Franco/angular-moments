import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { enviroment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/Response';
import { Moment } from '../interfaces/Moment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private baseApiUrl = enviroment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  create(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  getAll(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  getById(id: number): Observable<Response<Moment>> {
    return this.http.get<Response<Moment>>(`${this.apiUrl}/${id}`);
  }

  removeMoment(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
