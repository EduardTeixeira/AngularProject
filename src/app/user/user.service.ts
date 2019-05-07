import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrls } from '../app.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient) {

  }

  public login(username, password) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', localStorage.getItem("token"));

      let query = `?username=${username}&password=${password}`

    return this.http.get(BaseUrls.urlApi + '/login' + query , { headers: headers })
      .map(this.extractData)
      .catch(this.handleError)

  }

  public getUser() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', localStorage.getItem("token"));

    return this.http.get(BaseUrls.urlApi + '/user', { headers: headers })
      .map(this.extractData)
      .catch(this.handleError)
  }

  public saveUser(entity: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', localStorage.getItem("token"));

    if (entity.customerProfile.id > 0) {
      return this.http.put(BaseUrls.urlApi + '/user', entity, { headers: headers })
        .map(this.extractData)
        .catch(this.handleError)
    } else {
      return this.http.post(BaseUrls.urlApi + '/user', entity, { headers: headers })
        .map(this.extractData)
        .catch(this.handleError)
    }
  }

  public deleteUser(id: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', localStorage.getItem("token"));

    let query = `?id=${id}`

    return this.http.delete(BaseUrls.urlApi + '/user' + query, { headers: headers })
      .map(this.extractData)
      .catch(this.handleError)
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }

}
