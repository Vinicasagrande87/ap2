import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Naoencontrada } from './naoencontrada';

describe('Naoencontrada', () => {
  let component: Naoencontrada;
  let fixture: ComponentFixture<Naoencontrada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Naoencontrada],
    }).compileComponents();

    fixture = TestBed.createComponent(Naoencontrada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
