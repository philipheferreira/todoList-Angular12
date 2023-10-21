import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaListaComponent } from './list.component';

describe('ListComponent', () => {
  let component: TarefaListaComponent;
  let fixture: ComponentFixture<TarefaListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarefaListaComponent]
    });
    fixture = TestBed.createComponent(TarefaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
