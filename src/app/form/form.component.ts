import { Component, OnInit } from '@angular/core';
import { Medico } from '../interfaces/medico';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  medico: Medico = {
    cedula_m: null,
    nombre_m: null,
    especialidad_m: null,
  };

  constructor(private medicosService: MedicosService) { }

  ngOnInit(): void {
  }

  guardarMedico() {
    console.log(this.medico);
    this.medicosService.guardarMedico(this.medico).subscribe((data)=>{
      alert('Medico guardado');
      console.log(data);      
    }, (error)=>{
      alert("Ha ocurrido un error");
      console.log(error);
    });
     
  }

}
