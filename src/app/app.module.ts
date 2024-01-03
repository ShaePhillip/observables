import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BabysittersComponent } from './components/babysitters/babysitters.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { FAQComponent } from './components/faq/faq.component';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from './components/history/history.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BabysittersComponent,
    CoffeeComponent,
    FAQComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
