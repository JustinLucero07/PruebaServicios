import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CadidatoService } from '../../services/cadidato.service';
import { Candidato } from '../../models/candidato';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidatos',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './candidatos.component.html',
  styleUrl: './candidatos.component.scss'
})
export class CandidatosComponent implements OnInit{
  candidatos: Candidato []=[]

  candidatoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    partido: new FormControl('', [Validators.required]),
    vicepresidente: new FormControl('', [Validators.required])
  }
  );

  ngOnInit(): void {
      this.cargarCandidatos();
  }
  
  constructor(private candidatoS:CadidatoService){}

  cargarCandidatos(){
    this.candidatoS.getCandidatos().subscribe(
      (data) => {
        this.candidatos = data;
      },
      (error) => console.error("error")
    );
  }

  registrar(){
    if(this.candidatoForm.valid){
      const candidato = new Candidato(
        0,
        this.candidatoForm.get('nombre')?.value || '',
        this.candidatoForm.get('apellido')?.value || '',
        this.candidatoForm.get('partido')?.value || '',
        this.candidatoForm.get('vicepresidente')?.value || '',
      );
  
      this.candidatoS.createCandidato(candidato).subscribe(
        () => {
          this.cargarCandidatos();
          this.candidatoForm.reset();
        },
        (error) => console.error("error")
      );
    }
  }

}
