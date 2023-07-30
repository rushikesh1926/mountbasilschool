import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDisclosureComponent } from './public-disclosure.component';

describe('PublicDisclosureComponent', () => {
  let component: PublicDisclosureComponent;
  let fixture: ComponentFixture<PublicDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDisclosureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
