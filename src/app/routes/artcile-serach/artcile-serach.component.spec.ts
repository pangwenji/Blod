import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtcileSerachComponent } from './artcile-serach.component';

describe('ArtcileSerachComponent', () => {
  let component: ArtcileSerachComponent;
  let fixture: ComponentFixture<ArtcileSerachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtcileSerachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtcileSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
