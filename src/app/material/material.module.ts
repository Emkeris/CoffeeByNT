import { NgModule } from '@angular/core';
import { MatSidenavModule, MatCheckboxModule, MatButtonModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [ MatSidenavModule, MatCheckboxModule, MatButtonModule, MatToolbarModule],
  exports: [ MatSidenavModule, MatCheckboxModule, MatButtonModule, MatToolbarModule]
})
export class MaterialModule { }
