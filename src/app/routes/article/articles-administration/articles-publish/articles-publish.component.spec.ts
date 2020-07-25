import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesPublishComponent } from './articles-publish.component';

describe('ArticlesPublishComponent', () => {
  let component: ArticlesPublishComponent;
  let fixture: ComponentFixture<ArticlesPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
