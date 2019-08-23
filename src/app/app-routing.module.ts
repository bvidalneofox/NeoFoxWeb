import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorwebComponent } from './administradorweb/administradorweb.component';
import { LoginComponent } from './administracion/login/login.component';
import { CorreosComponent } from './administracion/correos/correos.component';
import { LeermensajeComponent } from './administracion/leermensaje/leermensaje.component';
import { IniciowebComponent } from './inicioweb/inicioweb.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

const routes: Routes = [
  { path: '', component: IniciowebComponent },
  
  { path: 'administracion', component: AdministradorwebComponent, children:[
    { path: '', component: LoginComponent },
    { path: 'correos', component: CorreosComponent},
    { path: 'leer/:id', component: LeermensajeComponent}
  ]},

  { path: '**', component: NoEncontradoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
