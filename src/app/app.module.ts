import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockdataService } from './services/mockdata.service';
import { TariffListComponent } from './components/tariff-list/tariff-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TariffListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MockdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
