import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BindingsChildComponent } from './bindings-child/bindings-child.component';
import { ScribbleComponent } from './scribble/scribble.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingsChildComponent,
    ScribbleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
