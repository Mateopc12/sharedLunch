import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, MatSnackBarModule
  ],
  exports: [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, MatSnackBarModule],
  declarations: []
})
export class MaterialBundleModule { }
