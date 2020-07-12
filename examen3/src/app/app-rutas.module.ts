import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ComponenteNotaComponent} from './componentenota/componentenota.component';
import {ComponenteTareaComponent} from './componentetarea/componentetarea.component';


const routes: Routes =[
  {path: 'tarea', component: ComponenteTareaComponent},
  {path: 'nota',component: ComponenteNotaComponent},
  {path: '**', pathMatch:'full', redirectTo:'tarea'},
];  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRutasModule { }
