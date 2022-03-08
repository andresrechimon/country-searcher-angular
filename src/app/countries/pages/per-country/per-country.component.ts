import { Component} from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
  styleUrls: ['./per-country.component.css']
})
export class PerCountryComponent{
  term:string='';
  anyError:boolean=false;
  countries:Country[]=[];
  countriesSuggested:Country[]=[];
  showSugerences:boolean = false;

  constructor(private countriesService:CountriesService) { }

  search(term:string){
    this.anyError = false;
    this.term = term;
    this.countriesService.searchCountry(this.term)
        .subscribe((countries) => {
          this.countries = countries;
        }, (error)=> {
          this.anyError = true;
          this.countries = [];
        });
  }

  sugerences(term:string){
    this.anyError=false;
    this.term = term;
    this.showSugerences = true;
    this.countriesService.searchCountry(term)
        .subscribe(countries => this.countriesSuggested = countries.splice(0,4),
        (error) => this.countriesSuggested = []);
  }

  searchSuggested(term:string){
    this.search(term);
    this.showSugerences = false;
  }
}
