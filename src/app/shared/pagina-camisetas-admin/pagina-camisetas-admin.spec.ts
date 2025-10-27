import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCamisetasAdmin } from './pagina-camisetas-admin';

describe('PaginaCamisetasAdmin', () => {
  let component: PaginaCamisetasAdmin;
  let fixture: ComponentFixture<PaginaCamisetasAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCamisetasAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCamisetasAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
