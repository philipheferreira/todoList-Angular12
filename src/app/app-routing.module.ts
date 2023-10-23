import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaListaComponent } from './pages/tarefas/components/tarefa-lista/tarefa-lista.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';
import { NovaTarefaComponent } from './pages/nova-tarefa/nova-tarefa.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/tarefas' },
  { path: 'tarefas', component: TarefasComponent},
  { path: 'nova-tarefa', component:NovaTarefaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
