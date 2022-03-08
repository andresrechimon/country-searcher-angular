import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {
  country!:Country;

  constructor(private activatedRoute:ActivatedRoute, private countriesService:CountriesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.countriesService.getCountryPerAlpha(id)),
          tap(console.log)
        )
        .subscribe(country => this.country = country);
  }

}
