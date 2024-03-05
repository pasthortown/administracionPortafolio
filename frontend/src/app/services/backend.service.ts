import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  get_porfolio_items() {
    return this.http.get(environment.api + 'api/PorfolioItem').toPromise();
  }

  delete_porfolio_item(id: number) {
    return this.http.delete(environment.api + 'api/PorfolioItem/' + id.toString()).toPromise();
  }

  put_porfolio_item(porfolioItem: any, id: number) {
    return this.http.put(environment.api + 'api/PorfolioItem/' + id.toString(), JSON.stringify(porfolioItem)).toPromise();
  }

  post_porfolio_item(porfolioItem: any) {
    return this.http.post(environment.api + 'api/PorfolioItem', JSON.stringify(porfolioItem)).toPromise();
  }

  get_porfolio_cost() {
    return this.http.get(environment.api + 'api/PorfolioCost').toPromise();
  }

  delete_porfolio_cost(id: number) {
    return this.http.delete(environment.api + 'api/PorfolioCost/' + id.toString()).toPromise();
  }

  put_porfolio_cost(porfolioCost: any, id: number) {
    return this.http.put(environment.api + 'api/PorfolioCost/' + id.toString(), JSON.stringify(porfolioCost)).toPromise();
  }

  post_porfolio_cost(porfolioCost: any) {
    return this.http.post(environment.api + 'api/PorfolioCost', JSON.stringify(porfolioCost)).toPromise();
  }
}
