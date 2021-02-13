import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

const routes = [
  {
    path     : 'grid',
    component: GridComponent
  },
];

@NgModule({
  declarations: [
    GridComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatButtonModule,
  ]
})
export class GridModule { }
