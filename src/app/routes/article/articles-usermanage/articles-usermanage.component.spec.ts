import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesUsermanageComponent } from './articles-usermanage.component';

describe('ArticlesUsermanageComponent', () => {
  let component: ArticlesUsermanageComponent;
  let fixture: ComponentFixture<ArticlesUsermanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesUsermanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesUsermanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
