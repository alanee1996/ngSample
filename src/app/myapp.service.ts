import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {test} from '../app/Models/test';

@Injectable({
  providedIn: 'root'
})
export class MyappService {

  constructor(private http:HttpClient) { 

  }

  public get() : Observable<Array<test>>{
    let headers = new HttpHeaders();
    headers.append("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
    headers.append("Content-Type","text/plain; charset=utf-8");
    const res = this.http.get<Array<test>>("https://localhost:5001/weatherforecast",{
      headers: headers
    });
    return res;
  }
}
