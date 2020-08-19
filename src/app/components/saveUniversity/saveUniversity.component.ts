import { Component, OnInit } from '@angular/core';
import { University } from 'app/models/University';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-save-university',
  templateUrl: './saveUniversity.component.html',
  styleUrls: ['./saveUniversity.component.css']
})
export class SaveUniversityComponent implements OnInit {

  name:string="The Islamia University of Bahawalpur";
  url:string="https://www.iub.edu.pk/";
  location:string="Bahawalpur";

  university: University = new University();

    data : Date = new Date();
    focus;
    focus1;

    constructor(private http:HttpClient) {
    }

  ngOnInit(): void {
  }

  public  saveNewUni(){
    let university = new University();
    university.name=this.name;
    university.url=this.url;
    university.location=this.location;
    let url = "/api/saveNewUni";
    return this.http.post(url,university,{responseType:'text' as 'json'}).subscribe(
            res=> {
                if(res!=""){
                    alert("Post is saved");
                }
            },
            error1 => {
                alert("Some Error occoured");
            }
        )
}

}
