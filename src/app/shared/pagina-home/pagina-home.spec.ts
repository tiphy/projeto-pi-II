import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaHome } from './pagina-home';

describe('PaginaHome', () => {
  let component: PaginaHome;
  let fixture: ComponentFixture<PaginaHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
