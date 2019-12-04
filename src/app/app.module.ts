import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ContinuarComponent } from './continuar/continuar.component';
import { HomeComponent } from './home/home.component';


var firebaseConfig = {
  apiKey: "AIzaSyB8ZEC6LA2bgouj25rd2v4MunOf0upf8TE",
  authDomain: "exam-efdaa.firebaseapp.com",
  databaseURL: "https://exam-efdaa.firebaseio.com",
  projectId: "exam-efdaa",
  storageBucket: "exam-efdaa.appspot.com",
  messagingSenderId: "848661559206",
  appId: "1:848661559206:web:4847f20b242b1607b50167"
};

@NgModule({
  declarations: [
    AppComponent,
    ContinuarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),

    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
