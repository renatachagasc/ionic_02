import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ExibeTarefasPageRoutingModule } from './exibe-tarefas-routing.module';
import { ExibeTarefasPage } from './exibe-tarefas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExibeTarefasPageRoutingModule
  ],
  declarations: [ExibeTarefasPage]
})
export class ExibeTarefasPageModule {}
