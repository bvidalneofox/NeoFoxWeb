import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from 'src/app/sevicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private route: Router,
              private flashMessage: FlashMessagesService,
              private loginService: LoginService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.login(this.email, this.password)
      .then( res => {
        this.route.navigate(['administracion/correos']);
      })
      .catch(error => {
        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger', timeout: 4000
        })
      });
  }

}