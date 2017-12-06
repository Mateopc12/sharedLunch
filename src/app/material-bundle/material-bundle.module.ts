import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatFormFieldModule,
  MatButtonModule, MatToolbarModule, MatSnackBarModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule,
    MatToolbarModule, MatSnackBarModule, MatProgressSpinnerModule
  ],
  exports: [MatCardModule, MatInputModule, MatFormFieldModule,
    MatButtonModule, MatToolbarModule, MatSnackBarModule, MatProgressSpinnerModule],
  declarations: []
})
export class MaterialBundleModule { }
