import { Component} from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-per-capital',
  templateUrl: './per-capital.component.html',
  styleUrls: ['./per-capital.component.css']
})
export class PerCapitalComponent{
  term:string='';
  anyError:boolean=false;
  countries:Country[]=[];

  constructor(private countriesService:CountriesService) { }

  search(term:string){
    this.anyError = false;
    this.term = term;
    this.countriesService.searchCapital(this.term)
        .subscribe((countries) => {
          this.countries = countries;
        }, (error)=> {
          this.anyError = true;
          this.countries = [];
        });
  }
}
