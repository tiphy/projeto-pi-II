import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCompras } from './pagina-compras';

describe('PaginaCompras', () => {
  let component: PaginaCompras;
  let fixture: ComponentFixture<PaginaCompras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCompras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCompras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
