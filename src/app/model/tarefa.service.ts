import { Tarefa } from './tarefa';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[];

  constructor() {
    this.tarefas = [];
  }

  adicionar(desp: Tarefa): boolean {
    if (desp != undefined) {
      this.tarefas.push(desp);
      return true;
    }
    return false;
  }

  obterTodas(): Tarefa[] {
    return this.tarefas;
  }
}
