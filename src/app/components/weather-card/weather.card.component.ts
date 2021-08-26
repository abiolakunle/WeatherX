import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../../models/WeatherData';
import { WeatherService } from 'src/app/services/weather.service';

import { faCloudSunRain, faWind, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'weather-card',
    templateUrl: './weather.card.component.html',
    styleUrls: ['./weather.card.component.scss']
})
export class WeatherCardComponent implements OnInit {

    //images
    cloudIImage = faCloudSunRain;
    windImage = faWind;
    tempImage = faTemperatureHigh;


    data!: WeatherData;
    @Input() city: string = ""; //name of city to fetch data for
    isLoading: boolean = false;
    errorMessage: string = "";

    constructor(private weatherService: WeatherService) {
    }

    ngOnInit(): void {
        this.getWeather(this.city);
    }


    getWeather(cityName: string) {

        this.isLoading = true;

        setTimeout(() => { //added slight delay for loader to show

            this.weatherService.getWeather(cityName).subscribe((res) => {
                this.data = res;
                this.isLoading = false;
            },
                () => {
                    this.isLoading = false;
                    this.errorMessage = `${this.city} data not available`
                });
        }, 5000)

    }


}
