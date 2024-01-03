import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ɵɵresolveBody } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private httpService: HttpClient) { }

  public get = (route: string) =>{
    return this.httpService.get(route);
  }


  public post = (route: string, payload: any) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type':  'application/json'        
      }) 
    } 
    return this.httpService.post(route, payload, httpOptions);
  }

  public delete = (route: string, id: any) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type':  'application/json'        
      }),
      body: id
    }
    return this.httpService.delete(route, httpOptions);
  }

  public update = (routeString: string, id : any ) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type':  'application/json'        
      }),
      body : id
    }
    return this.httpService.put(routeString, httpOptions);
}

}

