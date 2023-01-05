import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';

@NgModule({
  declarations: [AppComponent, ContactoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
