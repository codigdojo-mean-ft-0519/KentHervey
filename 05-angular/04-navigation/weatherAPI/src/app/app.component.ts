import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weatherAPI';
  //weathers = 999;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // this.weatherService.getWeather().subscribe(weather => {
    //   console.log(weather.name);
    // });
  }
} // End class
