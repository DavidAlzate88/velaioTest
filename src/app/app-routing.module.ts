import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TareaComponent } from "./tarea/tarea.component";
import { TareasListComponent } from "./tareas-list/tareas-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tarea', component: TareaComponent },
  { path: 'tareas-list', component: TareasListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
