import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Mensajes } from '../modelos/mensajes.model';
import { MensajesServicio } from '../sevicios/mensajes.service';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  mensaje: Mensajes ={
    nombre: '',
    email: '',
    escrito: '',
    revisado: false,
    fecha: ''
  }

  @ViewChild("f") f: NgForm;
  @ViewChild("abrirModal") abrirModal: ElementRef;

  constructor(private servicioMensajes: MensajesServicio,
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
  }

  recibirCorreo({valid}: {valid: boolean}){
    if(!valid){
      this.flashMessages.show("Se ha encontrado un error en el formulario, favor de revisar y corregir", {
        cssClass: 'alert-danger', timeout: 5000
      });
      console.log("test");
    }else{
      //Agregar el correo
      this.obtenerFecha();
      this.servicioMensajes.agregarMensaje(this.mensaje);
      this.abrirModal.nativeElement.click();
    }
  }

  obtenerFecha(){
    let hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1;
    var yyyy = hoy.getFullYear();
    var hh = hoy.getHours();
    var min = hoy.getMinutes();
    this.mensaje.fecha = dd+'/'+mm+'/'+yyyy+' '+hh+':'+min;
  }
}
