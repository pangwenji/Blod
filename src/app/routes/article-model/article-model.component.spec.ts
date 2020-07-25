import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleModelComponent } from './article-model.component';

describe('ArticleModelComponent', () => {
  let component: ArticleModelComponent;
  let fixture: ComponentFixture<ArticleModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
