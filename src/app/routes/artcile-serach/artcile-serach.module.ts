import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtcileSerachRoutingModule } from './artcile-serach-routing.module';
import { ArtcileSerachComponent } from './artcile-serach.component';
import { NzInputModule, NzIconModule } from 'ng-zorro-antd';
import { ArtcileSerachPanelComponent } from './artcile-serach-panel.component';



@NgModule({
  declarations: [ArtcileSerachComponent, ArtcileSerachPanelComponent],
  imports: [
    CommonModule,
    ArtcileSerachRoutingModule,
    NzInputModule,
    NzIconModule
  ],
  exports: [
    ArtcileSerachComponent
  ]
})
export class ArtcileSerachModule { }
