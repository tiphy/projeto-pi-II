import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSocial } from './pagina-social';

describe('PaginaSocial', () => {
  let component: PaginaSocial;
  let fixture: ComponentFixture<PaginaSocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaSocial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSocial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
