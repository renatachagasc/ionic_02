import { TarefaService } from '../model/tarefa.service';
import { TipoTarefa } from '../model/tipotarefa';
import { Tarefa } from '../model/tarefa';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   
   tarefa: Tarefa;
   tipos: string[];
   adicionado: boolean;
   dataHoje = new Date();

   constructor(private ds: TarefaService) {
     let data = new Date();
     this.tarefa = new Tarefa('', '', TipoTarefa.ALTA, data.toISOString(), '');
     this.tipos = Object.values(TipoTarefa);
     this.adicionado = false;
   }
 
   adicionar(){
     const novaTarefa = new Tarefa(
       this.tarefa.nome,
       this.tarefa.responsavel,
       this.tarefa.tipo,
       this.tarefa.data,
       this.tarefa.descricao);
 
       if(this.tarefa.nome != '' && this.tarefa.responsavel != '' && this.tarefa.descricao != '') {
         this.adicionado = this.ds.adicionar(novaTarefa);    
       }   
   }
 
   limpar() {
     this.adicionado = false;
     this.tarefa.nome = '';
     this.tarefa.responsavel= '';
     this.tarefa.tipo = TipoTarefa.ALTA;
     this.tarefa.data = this.dataHoje.toISOString();
     this.tarefa.descricao= ''; 
   }
 
   ngOnInit(){
     this.adicionado = false;
   }

}
