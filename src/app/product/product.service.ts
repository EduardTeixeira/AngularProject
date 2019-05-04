import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/throw';
import { BaseUrls } from '../app.config';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient) {

  }

  public getProduct() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', localStorage.getItem("token"));

    return this.http.get(BaseUrls.urlApi + '/product', { headers: headers })
      .map(this.extractData)
      .catch(this.handleError)
  }

  public saveProduct(storeId: number, entity: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', localStorage.getItem("token"));

    if (entity.customerProfile.id > 0) {
      return this.http.put(BaseUrls.urlApi + '/product', entity, { headers: headers })
        .map(this.extractData)
        .catch(this.handleError)
    } else {
      return this.http.post(BaseUrls.urlApi + '/product', entity, { headers: headers })
        .map(this.extractData)
        .catch(this.handleError)
    }
  }

  public deleteProduct(id: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', localStorage.getItem("token"));

    let query = `?id=${id}`

    return this.http.delete(BaseUrls.urlApi + '/product' + query, { headers: headers })
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
