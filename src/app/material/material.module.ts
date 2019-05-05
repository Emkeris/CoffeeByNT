import { NgModule } from '@angular/core';
import {  MatSidenavModule,
          MatCheckboxModule,
          MatButtonModule,
          MatToolbarModule,
          MatFormFieldModule,
          MatInputModule} from '@angular/material';

@NgModule({
  imports: [ MatSidenavModule, MatCheckboxModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule],
  exports: [ MatSidenavModule, MatCheckboxModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule { }
