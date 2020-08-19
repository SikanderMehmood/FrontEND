import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../../UserModel';
import {loginServiceModel} from '../../../loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    newStudent: Student = new Student("sik@gmail.com","o5i15eba");

    data : Date = new Date();
    focus;
    focus1;

    constructor(private service: loginServiceModel) {
    }

    ngOnInit() {

        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }

    public saveNewStudent(){
        let res = this.service.saveMyNewStudent(this.newStudent);
    }

    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}

