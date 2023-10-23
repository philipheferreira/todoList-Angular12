import { TarefasService } from './../../services/tarefas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css']
})
export class NovaTarefaComponent  implements OnInit {
    validateForm!: FormGroup;
  
    submitForm(): void {
      this.tarefasService.salvar(this.validateForm.value);
      this.notification.create("success", 'Tarefa', 'Tarefa salva com sucesso');
      console.log('submit', this.validateForm.value);
      this.cleanForm ();
    }
  
    constructor(private fb: FormBuilder, private tarefasService: TarefasService, private notification: NzNotificationService) {}
    ngOnInit(): void {
      this.validateForm = this.fb.group({
        tarefa: [null, [Validators.required]],
        cpf: [null, [Validators.required]],
        responsavel: [null, [Validators.required]],
        prazoDeEntrega: [null, [Validators.required]]
      });
    }

    cleanForm(): void {
      this.validateForm = this.fb.group({
        tarefa: [null, [Validators.required]],
        cpf: [null, [Validators.required]],
        responsavel: [null, [Validators.required]],
        prazoDeEntrega: [null, [Validators.required]]
      });
    }


}
