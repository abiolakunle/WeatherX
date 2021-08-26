import { Component } from '@angular/core';
import { faGlobeAfrica, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header-weather',
  templateUrl: './header.weather.component.html',
  styleUrls: ['./header.weather.component.scss']
})
export class HeaderWeatherComponent {

  location = faLocationArrow;
  world = faGlobeAfrica;
}
