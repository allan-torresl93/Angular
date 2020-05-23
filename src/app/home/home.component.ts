import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../services/medicos.service';
import { HttpClient } from '@angular/common/http';
import { Medico } from '../interfaces/medico';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  API_ENDPOINT = 'http://localhost/medico/public/api/';
  medicos: Medico[];

  constructor(private medicosService: MedicosService, private httpClient: HttpClient) { 
    httpClient.get(this.API_ENDPOINT + 'medicos').subscribe((data: Medico[])=> {
      this.medicos = data;

    });
  }

  ngOnInit(): void {
  }

}
