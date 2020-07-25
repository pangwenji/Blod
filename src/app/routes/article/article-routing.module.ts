import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-Administration/articles-list/articles-list.component';
import { ArticlesPublishComponent } from './articles-Administration/articles-publish/articles-publish.component';
import { ArticlesUsermanageComponent } from './articles-usermanage/articles-usermanage.component';
import { ArticlesProjectManagementComponent } from './articles-project-management/articles-project-management.component';
import { AreamapComponent } from './arcticle-data-statistics/areamap/areamap.component';
import { BarchartComponent } from './arcticle-data-statistics/barchart/barchart.component';
import { HistogramComponent } from './arcticle-data-statistics/histogram/histogram.component';
import { LinechartComponent } from './arcticle-data-statistics/linechart/linechart.component';
import { PiechartComponent } from './arcticle-data-statistics/piechart/piechart.component';


const routes: Routes = [
  { path: 'articles-administration/articles-list', component: ArticlesListComponent, data: { title: '文章列表' } },
  { path: 'articles-administration/articles-publish', component: ArticlesPublishComponent },
  { path: 'articles-usermanage', component: ArticlesUsermanageComponent },
  { path: 'articles-project-management', component: ArticlesProjectManagementComponent },
  { path: 'arcticle-data-statistics/areamap', component: AreamapComponent },
  { path: 'arcticle-data-statistics/barchart', component: BarchartComponent },
  { path: 'arcticle-data-statistics/histogram', component: HistogramComponent },
  { path: 'arcticle-data-statistics/linechart', component: LinechartComponent },
  { path: 'arcticle-data-statistics/piechart', component: PiechartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
