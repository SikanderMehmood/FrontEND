import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Babylinks} from '../models/Babylinks';
import { SignUpModel } from 'app/models/SignUpModel';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})

export class sharedService {

  public  getLinks(id){
    let url = "/api/singleUni/"+id;
   return  this.http.get(url).map(res=>{

    return res;

   })
}

  constructor(private http:HttpClient) { }
}
