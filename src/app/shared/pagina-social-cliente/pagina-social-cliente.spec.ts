import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSocialCliente } from './pagina-social-cliente';

describe('PaginaSocialCliente', () => {
  let component: PaginaSocialCliente;
  let fixture: ComponentFixture<PaginaSocialCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaSocialCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSocialCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
