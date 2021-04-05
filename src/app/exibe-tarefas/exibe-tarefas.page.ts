import { TarefaService } from '../model/tarefa.service';
import { Tarefa } from '../model/tarefa';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibe-tarefas',
  templateUrl: './exibe-tarefas.page.html',
  styleUrls: ['./exibe-tarefas.page.scss'],
})
export class ExibeTarefasPage implements OnInit {
  tarefas: Tarefa[];

  constructor(private ds: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.ds.obterTodas();
  }

}
