import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { SortPlansPipe } from './pipes/sort-plans.pipe';
import { MockdataService } from './services/mockdata.service';
import localeDE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeDE);

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
  providers: [MockdataService,
    {
      provide: LOCALE_ID,
      useValue: 'de'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
