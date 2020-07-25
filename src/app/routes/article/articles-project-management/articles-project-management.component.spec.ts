import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesProjectManagementComponent } from './articles-project-management.component';

describe('ArticlesProjectManagementComponent', () => {
  let component: ArticlesProjectManagementComponent;
  let fixture: ComponentFixture<ArticlesProjectManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesProjectManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesProjectManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
