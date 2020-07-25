import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ng2-ckeditor';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticlesListComponent } from './articles-Administration/articles-list/articles-list.component';
import { ArticlesPublishComponent } from './articles-Administration/articles-publish/articles-publish.component';
import { ArticlesUsermanageComponent } from './articles-usermanage/articles-usermanage.component';
import { ArticlesProjectManagementComponent } from './articles-project-management/articles-project-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LinechartComponent } from './arcticle-data-statistics/linechart/linechart.component';
import { HistogramComponent } from './arcticle-data-statistics/histogram/histogram.component';
import { BarchartComponent } from './arcticle-data-statistics/barchart/barchart.component';
import { PiechartComponent } from './arcticle-data-statistics/piechart/piechart.component';
import { AreamapComponent } from './arcticle-data-statistics/areamap/areamap.component';
import { ArtcileSerachModule } from '../artcile-serach/artcile-serach.module';
import { ArticleModelComponent } from '../article-model/article-model.component';
import { WyCarouselComponent } from './articles-administration/wy-carousel/wy-carousel.component';
const COMPONENTS = [
  ArticlesListComponent,
  ArticlesPublishComponent,
  ArticlesUsermanageComponent, ArticlesProjectManagementComponent, LinechartComponent, HistogramComponent, BarchartComponent, PiechartComponent, AreamapComponent, ArticleModelComponent,]
// const COMPONENTS_NOROUNT = [
// ];
@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CKEditorModule,
    ArticleRoutingModule,
    ArtcileSerachModule,

  ],

})
export class ArticleModule { }
