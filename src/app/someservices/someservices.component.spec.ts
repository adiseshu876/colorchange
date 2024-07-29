import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeservicesComponent } from './someservices.component';

describe('SomeservicesComponent', () => {
  let component: SomeservicesComponent;
  let fixture: ComponentFixture<SomeservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
