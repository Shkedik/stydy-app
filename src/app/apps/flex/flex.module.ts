import { NgModule } from '@angular/core';
import { FlexComponent } from './flex.component';

import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path     : 'flex',
    component: FlexComponent
  },
];


@NgModule({
  declarations: [
    FlexComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
  ]
})
export class FlexModule { }
