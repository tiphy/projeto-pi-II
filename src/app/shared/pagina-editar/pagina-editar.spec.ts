import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEditar } from './pagina-editar';

describe('PaginaEditar', () => {
  let component: PaginaEditar;
  let fixture: ComponentFixture<PaginaEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
