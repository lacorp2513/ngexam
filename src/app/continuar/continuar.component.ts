import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseApiService } from '../firebase-api.service';

@Component({
  selector: 'app-continuar',
  templateUrl: './continuar.component.html',
  styleUrls: ['./continuar.component.css']
})
export class ContinuarComponent implements OnInit {
  students;
  student = this.fb.group({
    matricula: ['', [
      Validators.required,
      Validators.pattern('[0-9]')]],
    nombre: [''],
    apaterno: [''],
    amaterno: [''],
    email: [''],
    edad: ['']
  });
  constructor(private fb: FormBuilder, private fire: FirebaseApiService) {
    this.fire.list().subscribe((res) => {
      this.students = res;
    })
   }


  ngOnInit() {
  }

  public saveStudent() {
    this.fire.insert(this.student.value)
      .then(() => {
        alert('Estudiante guardado');
      })
  }



}
