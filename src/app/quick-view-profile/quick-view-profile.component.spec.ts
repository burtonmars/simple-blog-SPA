import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewProfileComponent } from './quick-view-profile.component';

describe('QuickViewProfileComponent', () => {
  let component: QuickViewProfileComponent;
  let fixture: ComponentFixture<QuickViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
