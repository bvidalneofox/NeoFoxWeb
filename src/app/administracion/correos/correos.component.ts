import { Component, OnInit } from '@angular/core';
import { Mensajes } from 'src/app/modelos/mensajes.model';
import { MensajesServicio } from 'src/app/sevicios/mensajes.service';

@Component({
  selector: 'app-correos',
  templateUrl: './correos.component.html',
  styleUrls: ['./correos.component.css']
})
export class CorreosComponent implements OnInit {

  mensajes: Mensajes[];
  mensaje: Mensajes = {
    nombre: '',
    email: '',
    escrito: '',
    revisado: false,
    fecha: ''
  }

  constructor(private mensajesServicio: MensajesServicio) { }

  ngOnInit() {
    this.mensajesServicio.getMensajes().subscribe(
      mensajes => {
        this.mensajes = mensajes;
      }
    )
  }

}
