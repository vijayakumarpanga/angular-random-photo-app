import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pluck} from 'rxjs/operators'
interface PhotoServiceResponse{
  urls : {
    raw :  string,
    full : string,
    regular: string
  }
}
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http : HttpClient) { }

  getPhoto(){
   return this.http.get<PhotoServiceResponse>('https://api.unsplash.com/photos/random', {
      headers :{ 
        Authorization : 'Client-ID 6Ahyn1sCohHR94d7HkZeN_o_UGBbKEULUA4c6rMZIFo'
      }
    }).pipe(pluck('urls'));
}
}
