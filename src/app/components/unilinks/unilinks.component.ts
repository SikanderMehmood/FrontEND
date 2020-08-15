import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Babylinks} from '../../models/Babylinks';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-unilinks',
  templateUrl: './unilinks.component.html',
  styleUrls: ['./unilinks.component.css']
})
export class UnilinksComponent implements OnInit {

  babylinks:Babylinks[] = [];

  constructor(private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.getAllLinks();
  }
  getAllLinks(){
    let url = "/api/singleUni/"+this.route.snapshot.params['id'];
    this.http.get<Babylinks[]>(url).subscribe(

      res =>{
        this.babylinks = res;
        console.log(res);
      },
      err =>{
        alert("Some error occoured while getting universities");
      }

    )
  }

}
