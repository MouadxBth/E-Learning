import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourspageComponent } from './courspage.component';

describe('CourspageComponent', () => {
  let component: CourspageComponent;
  let fixture: ComponentFixture<CourspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
