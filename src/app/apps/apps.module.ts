import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsComponent } from './apps.component';

import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from './flex/flex.module';
import { GridModule } from './grid/grid.module';

const routes = [
  {
    path     : '',
    component: AppsComponent
  }
];

@NgModule({
  declarations: [
    AppsComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forChild(routes),
    
    FlexModule,
    GridModule,
    
    MatButtonModule,
  ]
})
export class AppsModule { }
