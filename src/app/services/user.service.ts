import { Observable } from 'rxjs';
import { User } from './../models/user/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import { ReturnResponse } from './action-result/ReturnResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "user";

  constructor(private httpClient: HttpClient) { }

  public create(user: User) : Observable<ReturnResponse>
  {
    return this.httpClient.post<ReturnResponse>(`${environment.authentication_url}${this.url}`, user);
  }

}
