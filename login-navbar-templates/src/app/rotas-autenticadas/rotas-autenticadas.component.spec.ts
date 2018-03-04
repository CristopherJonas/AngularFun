import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasAutenticadasComponent } from './rotas-autenticadas.component';

describe('RotasAutenticadasComponent', () => {
  let component: RotasAutenticadasComponent;
  let fixture: ComponentFixture<RotasAutenticadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotasAutenticadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotasAutenticadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
