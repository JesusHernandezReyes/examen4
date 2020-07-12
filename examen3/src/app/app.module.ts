import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ComponenteTareaComponent} from './componentetarea/componentetarea.component';
import { ComponenteNotaComponent } from './componentenota/componentenota.component';
import { AppRutasModule } from './app-rutas.module';
import {ComoponenteTarea2Component} from './componentetarea2/componentetarea2.component';
import { ComponenteNota2Component } from './componentenota2/componentenota2.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ComponenteTareaComponent,
    ComponenteNotaComponent,
    ComoponenteTarea2Component,
    ComponenteNota2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRutasModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
