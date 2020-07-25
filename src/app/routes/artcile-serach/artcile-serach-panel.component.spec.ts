import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtcileSerachPanelComponent } from './artcile-serach-panel.component';

describe('ArtcileSerachPanelComponent', () => {
  let component: ArtcileSerachPanelComponent;
  let fixture: ComponentFixture<ArtcileSerachPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtcileSerachPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtcileSerachPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
