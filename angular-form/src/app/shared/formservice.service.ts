import { Injectable } from '@angular/core';
import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor(private http:HttpClient) { }

  url = `${environment.apiUrl}`;
  
 
  options={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      //'Authorization':'Basic'+this.token
    }),
    withCredentials:false
  }

  myPostMethod(data){
    return this.http.post(this.url+'/dform',data)
    .subscribe((res)=>console.log('post added sucessfully',res))
  }
  myGetMethod(){
    return this.http.get(this.url+'/dform')
  }

}
