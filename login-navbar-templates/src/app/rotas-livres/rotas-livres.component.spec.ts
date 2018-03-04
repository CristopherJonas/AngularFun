import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasLivresComponent } from './rotas-livres.component';

describe('RotasLivresComponent', () => {
  let component: RotasLivresComponent;
  let fixture: ComponentFixture<RotasLivresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotasLivresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotasLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
