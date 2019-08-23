import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Mensajes } from '../modelos/mensajes.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class MensajesServicio{

    mensajesColeccion: AngularFirestoreCollection<Mensajes>;
    mensajesDoc: AngularFirestoreDocument<Mensajes>;
    mensajes: Observable<Mensajes[]>;
    mensaje: Observable<Mensajes>
    
    constructor(private db: AngularFirestore){
        this.mensajesColeccion = db.collection('mensajes', ref => ref.orderBy('fecha','asc'));
    }
   
    agregarMensaje(mensaje: Mensajes){
        this.mensajesColeccion.add(mensaje);
    }

    getMensajes(): Observable<Mensajes[]>{
        this.mensajes = this.mensajesColeccion.snapshotChanges().pipe(
            map( cambios => {
                return cambios.map( accion => {
                    const datos = accion.payload.doc.data() as Mensajes;
                    datos.id = accion.payload.doc.id;
                    return datos;
                })
            })
        );
        return this.mensajes;
    }

    getMensaje(id: string){
        this.mensajesDoc = this.db.doc<Mensajes>(`mensajes/${id}`);
        this.mensaje = this.mensajesDoc.snapshotChanges().pipe(
            map( accion => {
                if(accion.payload.exists === false){
                    return null;
                }else{
                    const datos = accion.payload.data() as Mensajes;
                    datos.id = accion.payload.id;
                    return datos;
                }
            })
        );
        return this.mensaje;
    }
}