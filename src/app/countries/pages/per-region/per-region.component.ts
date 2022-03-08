import { Component} from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-per-region',
  templateUrl: './per-region.component.html',
  styleUrls: ['./per-region.component.css']
})
export class PerRegionComponent{
  continents: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  continentSelected:string = '';
  countries:Country[] = [];

  constructor(private countriesService:CountriesService) { }

  getClass(continent:string):string{
    return (continent === this.continentSelected) ? 'btn-primary' : 'btn-outline-primary'
  }

  activateContinent(continent:string){
    if(continent === this.continentSelected){
      return;
    }
    this.continentSelected = continent;
    this.countries = [];

    this.countriesService.searchContinent(continent)
        .subscribe(countries => this.countries = countries);
  }

}
