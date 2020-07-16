import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({

    providedIn:'root'
})

export class loginServiceModel {
    constructor(private http:HttpClient){}


    public  saveMyNewStudent(user){
        let url = "/api/new";
        return this.http.post(url,user,{responseType:'text' as 'json'}).subscribe(
                res=> {
                    location.reload();
                },
                error1 => {
                    alert("Some Error occoured");
                }
            )
    }
}
