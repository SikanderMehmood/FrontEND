import { Injectable } from '@angular/core';
import { NewPost } from 'app/models/newPost';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaveNewPostServiceService {

  public  saveNewPost(post){
    let url = "/api/generalPost";
    return this.http.post<NewPost>(url,post,{responseType:'text' as 'json'}).subscribe(
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
