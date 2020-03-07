import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Newspaper } from '../newspaper';
import { Owner } from '../owner';

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.scss']
})
export class NewspaperComponent implements OnInit {
  @Input() newspaper : Newspaper;

  constructor() { }

  ngOnInit() {
  }

}
