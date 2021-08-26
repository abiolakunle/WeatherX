import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environmentKeys } from '../environments/environment.keys';
import { WeatherData } from '../models/WeatherData';




/**
* Service calls contains methods that call the weather service api
*/
@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(private http: HttpClient) { }


    /**
    * Returns weather data for a city
    */
    getWeather(cityName: string): Observable<WeatherData> {

        const weatherByCityUrl = `${environmentKeys.weatherBaseApiUrl}weather?q=${cityName}&appid=${environmentKeys.weatherApiKey}&units=Metric`;

        return this.http.get<any>(weatherByCityUrl).pipe(
            map(res => {

                var data: WeatherData = {
                    cityName: res.name,
                    temperature: res.main.temp,
                    windSpeed: res.wind.speed
                }
                return data;
            })
        );
    }

}
