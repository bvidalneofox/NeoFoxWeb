import { Component, OnInit } from '@angular/core';
import { Mensajes } from 'src/app/modelos/mensajes.model';
import { MensajesServicio } from 'src/app/sevicios/mensajes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leermensaje',
  templateUrl: './leermensaje.component.html',
  styleUrls: ['./leermensaje.component.css']
})
export class LeermensajeComponent implements OnInit {

  mensaje: Mensajes= {
    nombre: '',
    email: '',
    escrito: '',
    revisado: false,
    fecha: ''
  }

  id: string;

  constructor(private mensajeServicio: MensajesServicio,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.mensajeServicio.getMensaje(this.id).subscribe( mensaje => {
      this.mensaje = mensaje;
    });
  }

}
