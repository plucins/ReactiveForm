import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {UserFormComponent} from './user-form/user-form.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule, MatTabsModule, MatDialog, MatDialogModule, MatAutocompleteModule, MatRadioModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserFormReactiveComponent } from './user-form-reactive/user-form-reactive.component';
import {InputTrimModule} from "ng2-trim-directive";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UserFormComponent,
    UserFormReactiveComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatRadioModule,
    InputTrimModule,
  ],
  providers: [
    MatDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
