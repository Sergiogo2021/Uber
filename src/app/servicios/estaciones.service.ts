import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstacionesModelo } from '../modelos/estaciones.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class EstacionesService {
  url = "http://localhost:3000"
  token: string = ''
  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) {      this.token = this.seguridadService.getToken();
    }

    store(estaciones: EstacionesModelo): Observable<EstacionesModelo> {
      return this.http.post<EstacionesModelo>(`${this.url}/estaciones`, {
        nombre: estaciones.nombre,
        direccion: estaciones.direccion,
        coordx : estaciones.coordx
        
      });
    }
    getAll(): Observable<EstacionesModelo[]>{
      return this.http.get<EstacionesModelo[]>(`${this.url}/estaciones`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    update(estaciones: EstacionesModelo): Observable<EstacionesModelo> {
      return this.http.patch<EstacionesModelo>(`${this.url}/estaciones/${estaciones.id}`, {
        nombre: estaciones.nombre,
        direccion: estaciones.direccion,
        coordx : estaciones.coordx
       
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }
    delete(id: string): Observable<EstacionesModelo[]>{
      return this.http.delete<EstacionesModelo[]>(`${this.url}/estaciones/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    getWithId(id: string): Observable<EstacionesModelo>{
      return this.http.get<EstacionesModelo>(`${this.url}/estaciones/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

}
