import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ErrorPipe,
  FloatPipe,
  MinutesPipe,
  IfNullPipe,
  PeriodePipe,
  ReversePipe,
  TimerPipe,
  TruncatePipe,
} from './pipes';
import {
  SidebarComponent,
  AddButtonComponent,
  HeaderFilterComponent,
} from './components';
import { AdminComponent, LayoutHeaderComponent } from './layouts';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  RouterlinkCustomDirective,
  DynamicHeaderHostDirective,
} from './directives';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { ListCardComponent } from './components/cards/list-card/list-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MenuPopoverComponent } from './components/menu-popover/menu-popover.component';

const declarables = [
  ErrorPipe,
  FloatPipe,
  MinutesPipe,
  IfNullPipe,
  PeriodePipe,
  ReversePipe,
  TimerPipe,
  TruncatePipe,
  SidebarComponent,
  LayoutHeaderComponent,
  RouterlinkCustomDirective,
  ModalComponent,
  MenuPopoverComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatDialogModule,
    // StoreModule.forRoot(reducers, { metaReducers }),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  exports: [...declarables, MaterialModule],
  declarations: [
    ...declarables,
    AdminComponent,
    AddButtonComponent,
    HeaderFilterComponent,
    ListCardComponent,
    DynamicHeaderHostDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
