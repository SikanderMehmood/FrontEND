import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uiversities } from 'app/models/universities';

@Component({
  selector: 'app-universityscrap',
  templateUrl: './universityscrap.component.html',
  styleUrls: ['./universityscrap.component.css']
})
export class UniversityscrapComponent implements OnInit {

  universities:Uiversities[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAllUniversities();
  }

  public getAllUniversities(){
    let url = "/api/allUniversities";
    this.http.get<Uiversities[]>(url).subscribe(

      res =>{
        this.universities = res;
      },
      err =>{
        alert("Some error occoured while getting universities");
      }

    ) 

  }

}
