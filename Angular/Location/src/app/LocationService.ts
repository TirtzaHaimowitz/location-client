import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 @Injectable()
     //{
//   providedIn: 'root'
// })
export class LocationService {
  constructor(private http: HttpClient) { }
baseURL: string= "http://localhost:2194/api/";
  getDistance(source: string,destination: string):Observable<HashTable<object>>{
    return this.http.get(this.baseURL+"Location/getDistance?source="+source+"&destination="+destination)
    .pipe(
      map(res => <HashTable<object>>res) // or any other operator
    );
    // .subscribe(res => console.log(res));
  }
}