import { Component, OnInit } from '@angular/core';
import { SignUpModel } from 'app/models/SignUpModel';
import { SignUpserviceService } from 'app/services/signUpservice.service';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {

  newSignUpInfo: SignUpModel = { name: 'Sikander', email:'siku@gmail.com', password: '05i15eba',collegeName: 'Punjab',uniName: 'Islamia',preMedical:true,preengineering:true,fscMarks:100};


  constructor(private service:SignUpserviceService) {
    var pass="05i15eba";
   }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
}
public savenewSignUp(){
  let res = this.service.saveNewSignUp(this.newSignUpInfo);
}

ngOnDestroy(){
  var body = document.getElementsByTagName('body')[0];
  body.classList.remove('login-page');

  var navbar = document.getElementsByTagName('nav')[0];
  navbar.classList.remove('navbar-transparent');
}

}
