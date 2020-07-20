import { Component, OnInit } from '@angular/core';
import { SignUpModel } from 'app/models/SignUpModel';
import { SignUpserviceService } from 'app/services/signUpservice.service';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {
  fullname:string="Sikander";
  email:string="some@gmail.com";
  fscMarks:number =100;
  password:string ="05i15eba";
  collegeName:string="Punjab College";
  uniName:string="Islamia University";
  preMedical:boolean = true;
  preengineering:boolean = true;
  unilist:Array<string>=["Item-1","Item-2","Item-3"];

  constructor(private service:SignUpserviceService) {}

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
}

public savenewSignUp(){
  let signUpObject = new SignUpModel();
  signUpObject.name=this.fullname;
  signUpObject.email=this.email;
  signUpObject.fscMarks=this.fscMarks;
  signUpObject.password=this.password;
  signUpObject.collegeName=this.collegeName;
  signUpObject.uniName=this.uniName;
  signUpObject.preMedical=this.preMedical;
  signUpObject.preengineering=this.preengineering;
  signUpObject.uniList=this.unilist;
  let res = this.service.saveNewSignUp(signUpObject);
}

public addToUniList(){


}

ngOnDestroy(){
  var body = document.getElementsByTagName('body')[0];
  body.classList.remove('login-page');

  var navbar = document.getElementsByTagName('nav')[0];
  navbar.classList.remove('navbar-transparent');
}

}
