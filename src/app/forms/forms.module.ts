import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormsComponent} from './forms.component';
import {TranslateModule} from 'ng2-translate';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsService} from './forms.service';
import {CustomComponentsModule} from '../_common/custom-components/custom-components.module';

let routes = [
  {path: '', component: FormsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CustomComponentsModule,
    RouterModule.forChild(routes)
  ],
  providers: [FormsService],
  declarations: [FormsComponent]
})
export class FormsPageModule {
}
