import { NgModule } from '@angular/core';
import { MatSidenavModule, MatCheckboxModule, MatButtonModule} from '@angular/material';

@NgModule({
  imports: [ MatSidenavModule, MatCheckboxModule, MatButtonModule],
  exports: [ MatSidenavModule, MatCheckboxModule, MatButtonModule]
})
export class MaterialModule { }
