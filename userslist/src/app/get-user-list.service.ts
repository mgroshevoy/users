import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserListService {
  public cache = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
  ) {
  }

  public getUserList(page: number = 1): Observable<any> {
     const apiUrl = 'https://reqres.in/api/users?page=';
     return this.http.get(`${apiUrl}${page}`);
  }

  public getUser(id: number): any {
    const apiUrl = 'https://reqres.in/api/users/';
    return this.http.get(`${apiUrl}${id}`);
  }

  updateCache(data: any[]) {
    this.cache.next(data);
  }
}
