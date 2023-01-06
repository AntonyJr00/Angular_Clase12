import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactoReactivoComponent } from './contacto/contacto-reactivo/contacto-reactivo.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';

@NgModule({
  declarations: [AppComponent, ContactoComponent, ContactoReactivoComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
