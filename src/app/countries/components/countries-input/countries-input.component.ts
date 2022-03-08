import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styleUrls: ['./countries-input.component.css']
})
export class CountriesInputComponent implements OnInit{
  @Output() onEnter:EventEmitter<string> = new EventEmitter;
  @Output() onDebounce:EventEmitter<string> = new EventEmitter;
  
  @Input() placeholder:string = '';

  debouncer: Subject<string> = new Subject;

  term:string='';

  ngOnInit(){
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  search(){
    this.onEnter.emit(this.term);
  }

  pressKey(){
    this.debouncer.next(this.term);
  }
}
