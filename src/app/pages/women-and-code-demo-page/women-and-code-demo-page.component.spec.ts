import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenAndCodeDemoPageComponent } from './women-and-code-demo-page.component';

describe('WomenAndCodeDemoPageComponent', () => {
  let component: WomenAndCodeDemoPageComponent;
  let fixture: ComponentFixture<WomenAndCodeDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenAndCodeDemoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenAndCodeDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
