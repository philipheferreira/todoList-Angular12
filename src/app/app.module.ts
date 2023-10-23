import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaListaComponent } from './pages/tarefas/components/tarefa-lista/tarefa-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { TarefasComponent } from './pages/tarefas/tarefas.component';
import { NovaTarefaComponent } from './pages/nova-tarefa/nova-tarefa.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TarefasService } from './services/tarefas.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    TarefaListaComponent,
    TarefasComponent,
    NovaTarefaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    ReactiveFormsModule,
    NzFormModule,
    NzNotificationModule
  ],
  providers: [
    TarefasService,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
