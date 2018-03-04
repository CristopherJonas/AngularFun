import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAutenticadaComponent } from './pagina-autenticada.component';

describe('PaginaAutenticadaComponent', () => {
  let component: PaginaAutenticadaComponent;
  let fixture: ComponentFixture<PaginaAutenticadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAutenticadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAutenticadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
