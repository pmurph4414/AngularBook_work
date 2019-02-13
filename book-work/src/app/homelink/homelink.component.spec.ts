import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelinkComponent } from './homelink.component';

describe('HomelinkComponent', () => {
  let component: HomelinkComponent;
  let fixture: ComponentFixture<HomelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
