import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SignUpModel } from 'app/models/SignUpModel';

@Injectable({
  providedIn: 'root'
})

export class SignUpserviceService {

  public  saveNewSignUp(info){
    let url = "/log/new";
    return this.http.post<SignUpModel>(url,info,{responseType:'text' as 'json'}).subscribe(
            res=> {
                location.reload();
            },
            error1 => {
                alert("Some Error occoured");
            }
        )
}

  constructor(private http:HttpClient) { }
}
