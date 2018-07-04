import { NgModule, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatSidenavModule, 
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [

    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,

  ],
  exports: [

    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,

  ],
  declarations: []
})
export class SharedModule { }
