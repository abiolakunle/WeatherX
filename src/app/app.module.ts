import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherCardComponent } from './components/weather-card/weather.card.component';
import { HeaderWeatherComponent } from './components/weather-header/header.weather.component';
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterWeatherComponent } from './components/weather-footer/footer.weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderWeatherComponent,
    WeatherCardComponent,
    FooterWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
