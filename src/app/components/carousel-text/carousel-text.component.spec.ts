import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTextComponent } from './carousel-text.component';

describe('CarouselTextComponent', () => {
  let component: CarouselTextComponent;
  let fixture: ComponentFixture<CarouselTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
