import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medico } from '../interfaces/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  API_ENDPOINT = 'http://localhost/hospital/public/api/';

  constructor(private httpClient: HttpClient) { }

   guardarMedico(medico: Medico){
    const HEADERS = new HttpHeaders({'content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'guardarMedico', medico, {headers: HEADERS});
   }
}
