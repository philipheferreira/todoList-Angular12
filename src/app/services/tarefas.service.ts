import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor() { }

  onAllChecked(event: any) {

  }

  check(id: string, listOfCheckedItems: string[]) {
    if (this.isChecked(id, listOfCheckedItems)) {
      this.updateStorage(id, false)
      return listOfCheckedItems.filter((v) => v != id);
    }
    this.updateStorage(id, true)
    return [...listOfCheckedItems, id];
  }

  updateStorage(id: string, checked: boolean) {
    const data = this.getData();
    const updatedData = data.map((item) => {
      if (item.id == id) {
        return { ...item, checked }
      }
      return item;
    })
    localStorage.setItem('data', JSON.stringify(updatedData))
  }
  isChecked(id: string, listOfCheckedItems: string[]) {
    return listOfCheckedItems.includes(id)
  }

  getStatus(isChecked: boolean, prazoDeEntrega: string) {
    if (isChecked) {
      return 'concluido'
    }
    if (this.isOpen(prazoDeEntrega)) {
      return 'aberto'
    }
    return 'expirado'
  }
  isOpen(prazoDeEntrega: string) {
    const [d, m, y] = prazoDeEntrega.split('/').map(v => Number(v))
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();

    if (y > ano) {
      return true
    }

    if (m > mes && y == ano) {
      return true
    }

    if (d > dia && m == mes && y == ano) {
      return true
    }

    return false
  }

  formatarCpf(cpf: string) {

    return cpf.replace(/\D/g, "")                    //Remove tudo o que não é dígito
      .replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
      .replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos

  }


  filterStatus(status: string, item: { id: string, prazoDeEntrega: string }, listOfCheckedItems: string[]) {
    const check = this.isChecked(item.id, listOfCheckedItems);
    return status == this.getStatus(check, item.prazoDeEntrega);
  }

  getData(): any[] {
    const data = localStorage.getItem('data') || '[]'
    return JSON.parse(data)
  }

  getSelecionados() {
    return this.getData().filter(({ checked }) => checked).map(({ id }) => id)
  }

  salvar(item: any){
      const task = {...item, id: new Date().getTime().toString()}
      const data = this.getData()
      const newData = [...data, task]
      localStorage.setItem('data', JSON.stringify(newData))
  }
}
