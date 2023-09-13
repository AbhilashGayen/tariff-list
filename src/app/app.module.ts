import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { MockdataService } from './services/mockdata.service';
import { SortPlansPipe } from './pipes/sort-plans.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TariffListComponent,
    SortPlansPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MockdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
