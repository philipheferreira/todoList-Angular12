import { TarefasService } from './../../../../services/tarefas.service';
import { Component } from '@angular/core';

import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

interface DataItem {
  id: string;
  tarefa: string;
  cpf: string;
  responsavel: string;
  prazoDeEntrega: string;
  status: string;
  checked: boolean;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
}

@Component({
  selector: 'app-tarefa-lista',
  templateUrl: './tarefa-lista.component.html',
  styleUrls: ['./tarefa-lista.component.css']
})
export class TarefaListaComponent {
   checked: boolean = false;
   listOfData: DataItem[] = this.tarefasService.getData();
   listOfCheckedItems: string[] = this.tarefasService.getSelecionados();
   listOfColumns: ColumnItem[] = [
      {
        name: 'Tarefas',
        sortOrder: null,
        sortFn: (a: DataItem, b: DataItem) => a.tarefa.localeCompare(b.tarefa),
        listOfFilter: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' }
        ],
        filterFn: (list: string[], item: DataItem) => list.some(name => item.tarefa.indexOf(name) !== -1)
      },
      {
        name: 'CPF',
        sortOrder: null,
        sortFn: (a: DataItem, b: DataItem) => Number(a.cpf) - Number(b.cpf),
        listOfFilter: [],
        filterFn: null
      },
      {
        name: 'Responsavel',
        sortFn: null,
        sortOrder: null,
        listOfFilter: [
          { text: 'London', value: 'London' },
          { text: 'Sidney', value: 'Sidney' }
        ],
        filterFn: (responsavel: string, item: DataItem) => item.responsavel.indexOf(responsavel) !== -1
      },
      {
         name: 'Prazo de entrega',
         sortFn: null,
         sortOrder: null,
         listOfFilter: [],
         filterFn: null
       },
       {
         name: 'Status',
         sortFn: null,
         sortOrder: null,
         listOfFilter: [
           { text: 'Concluido', value: 'concluido' },
           { text: 'Aberto', value: 'aberto' },
           { text: 'Expirado', value: 'expirado' }
         ],
         filterFn: (status: string, item: DataItem) =>this.tarefasService.filterStatus(status, item, this.listOfCheckedItems)
       }
    ];


    constructor(private tarefasService: TarefasService){}
  
    trackByName(_: number, item: ColumnItem): string {
      return item.name;
    }
  
    sortByCpf(): void {
      this.listOfColumns.forEach(item => {
        if (item.name === 'cpf') {
          item.sortOrder = 'descend';
        } else {
          item.sortOrder = null;
        }
      });
    }
  
    resetFilters(): void {
      this.listOfColumns.forEach(item => {
        if (item.name === 'Name') {
          item.listOfFilter = [
            { text: 'Joe', value: 'Joe' },
            { text: 'Jim', value: 'Jim' }
          ];
        } else if (item.name === 'Address') {
          item.listOfFilter = [
            { text: 'London', value: 'London' },
            { text: 'Sidney', value: 'Sidney' }
          ];
        }
      });
    }
  
    resetSortAndFilters(): void {
      this.listOfColumns.forEach(item => {
        item.sortOrder = null;
      });
      this.resetFilters();
    }

    onAllChecked(event: any) {

    }

    check(id: string) {
      this.listOfCheckedItems = this.tarefasService.check(id, this.listOfCheckedItems)
   }
   isChecked(id: string) {
      return this.tarefasService.isChecked(id, this.listOfCheckedItems)
   }
   isOpen(prazoDeEntrega: string) {
      return this.tarefasService.isOpen(prazoDeEntrega)
   }

   formatarCpf(cpf: string) {
      return this.tarefasService.formatarCpf(cpf)
   }
//   toDoItems: string[] = [];
//   isActive: boolean = true 

//   text: string = '';

//   addItem() {
//      this.toDoItems.push(this.text);

//      this.text = '';
//   }

//   removeItem(index: number) {
//      this.toDoItems.splice(index, 1);
//   }
 }
