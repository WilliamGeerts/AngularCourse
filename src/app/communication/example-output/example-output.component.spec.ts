import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOutputComponent } from './example-output.component';

describe('ExampleOutputComponent', () => {
  let component: ExampleOutputComponent;
  let fixture: ComponentFixture<ExampleOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleOutputComponent]
    });
    fixture = TestBed.createComponent(ExampleOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
