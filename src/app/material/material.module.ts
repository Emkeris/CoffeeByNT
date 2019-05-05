import { NgModule } from '@angular/core';
import { MatSidenavModule, MatCheckboxModule, MatButtonModule, MatToolbarModule, MatFormFieldModule} from '@angular/material';

@NgModule({
  imports: [ MatSidenavModule, MatCheckboxModule, MatButtonModule, MatToolbarModule, MatFormFieldModule],
  exports: [ MatSidenavModule, MatCheckboxModule, MatButtonModule, MatToolbarModule, MatFormFieldModule]
})
export class MaterialModule { }
