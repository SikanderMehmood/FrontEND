import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({

    providedIn:'root'
})

export class loginServiceModel {
    constructor(private http:HttpClient, private router:Router){}


    public  saveMyNewStudent(user){
        let url = "/log/personLogin";
        return this.http.post(url,user,{responseType:'text' as 'json'}).subscribe(
                res=> {
                    if(res==""){
                        alert("Username/Password is incorrect.");
                    }
                    else{
                        this.router.navigate(['/components/personProfile']);
                    }
                    
                },
                error1 => {
                    alert("Some Error occoured");
                }
            )
    }
}
