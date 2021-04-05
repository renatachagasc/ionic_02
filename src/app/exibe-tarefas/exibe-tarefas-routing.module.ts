import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExibeTarefasPage } from './exibe-tarefas.page';

const routes: Routes = [
  {
    path: '',
    component: ExibeTarefasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExibeTarefasPageRoutingModule {}
