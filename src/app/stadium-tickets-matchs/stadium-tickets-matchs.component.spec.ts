import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumTicketsMatchsComponent } from './stadium-tickets-matchs.component';

describe('StadiumTicketsMatchsComponent', () => {
  let component: StadiumTicketsMatchsComponent;
  let fixture: ComponentFixture<StadiumTicketsMatchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StadiumTicketsMatchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumTicketsMatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
