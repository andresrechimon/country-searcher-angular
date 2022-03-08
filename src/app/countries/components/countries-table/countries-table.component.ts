import { Component, Input} from '@angular/core';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})
export class CountriesTableComponent{
  @Input() countries:Country[]=[];

  constructor() { }


}
