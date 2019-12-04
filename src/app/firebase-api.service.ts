import { Injectable } from '@angular/core';
import { FirebaseDatabase } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  constructor() { }

  public insert(student: Student) {
    return this.fb.database.ref('students').push(student);
  }

  public list(){
    return this.fb.list('students').valueChanges();
  }
}
