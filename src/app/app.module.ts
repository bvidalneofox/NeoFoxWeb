import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { MensajesServicio } from './sevicios/mensajes.service';
import { LoginComponent } from './administracion/login/login.component';
import { CorreosComponent } from './administracion/correos/correos.component';
import { LoginService } from './sevicios/login.service';
import { NavbarAdminComponent } from './administracion/navbar-admin/navbar-admin.component';
import { AdministradorwebComponent } from './administradorweb/administradorweb.component';
import { LeermensajeComponent } from './administracion/leermensaje/leermensaje.component';
import { IniciowebComponent } from './inicioweb/inicioweb.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { PortafolioProyectosComponent } from './portafolio-proyectos/portafolio-proyectos.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { ServiciosWebComponent } from './servicios-web/servicios-web.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CaracteristicasComponent,
    EquipoComponent,
    ContactoComponent,
    FooterComponent,
    LoginComponent,
    CorreosComponent,
    NavbarAdminComponent,
    AdministradorwebComponent,
    LeermensajeComponent,
    IniciowebComponent,
    NoEncontradoComponent,
    PortafolioProyectosComponent,
    RedesSocialesComponent,
    ServiciosWebComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firestore,'neofoxweb'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [MensajesServicio, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
