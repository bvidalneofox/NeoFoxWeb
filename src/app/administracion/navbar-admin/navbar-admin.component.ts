import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/sevicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;

  constructor(private loginService: LoginService,
              private route: Router) { }

  ngOnInit() {
    this.loginService.getAuth().subscribe( auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }else{
        this.isLoggedIn = false;
      }
    });
  }

  logOut(){
    this.loginService.logOut();
    this.isLoggedIn = false;
    this.route.navigate(['administracion']);
  }

}
