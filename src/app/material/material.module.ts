import { NgModule } from '@angular/core';
import {  MatSidenavModule,
          MatCheckboxModule,
          MatButtonModule,
          MatToolbarModule,
          MatFormFieldModule,
          MatInputModule,
          MatCardModule} from '@angular/material';

@NgModule({
  imports: [ MatSidenavModule, MatCheckboxModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatCardModule],
  exports: [ MatSidenavModule, MatCheckboxModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatCardModule]
})
export class MaterialModule { }
