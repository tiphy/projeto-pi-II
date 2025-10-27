import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCamisetas } from './pagina-camisetas';

describe('PaginaCamisetas', () => {
  let component: PaginaCamisetas;
  let fixture: ComponentFixture<PaginaCamisetas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCamisetas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCamisetas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
