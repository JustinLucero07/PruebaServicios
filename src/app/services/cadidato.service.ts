import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidato } from '../models/candidato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadidatoService {

  constructor(private http:HttpClient) { }

  private url = 'http://localhost:8080/pruebaServicios/can/candidatos';

  createCandidato(candidato: Candidato): Observable<Candidato> {
    return this.http.post<Candidato>(this.url,candidato);
  }

  getCandidatos():Observable<Candidato[]>{
    return this.http.get<Candidato[]>(this.url)
  }
}
