import { TipoTarefa } from './tipotarefa';
export class Tarefa {  
  
    nome: string;
    responsavel: string;
    tipo: TipoTarefa;
    data: string; //ISOString para data
    descricao: string; // estabelecimento em que foi feita
    

    constructor(no: string, resp: string, tip: TipoTarefa, data: string, des: string) {
        this.nome = no;
        this.responsavel = resp;
        this.tipo = tip;
        this.data = data;
        this.descricao= des;
    }
}   