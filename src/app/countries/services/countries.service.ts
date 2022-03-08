import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl:string = 'https://restcountries.com/v2';
  get httpParams(){
    return new HttpParams()
    .set('fields', 'name,capital,alpha2Code,flag,population')
  }

  constructor(private http:HttpClient) { }

  searchCountry(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`

    return this.http.get<Country[]>(url, {params:this.httpParams});
  }

  searchCapital(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`

    return this.http.get<Country[]>(url, {params:this.httpParams});
  }

  getCountryPerAlpha(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`

    return this.http.get<Country>(url);
  }

  searchContinent(continent:string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${continent}`

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
