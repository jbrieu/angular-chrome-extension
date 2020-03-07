import { Component, OnInit, Input } from '@angular/core';
import { Newspaper } from '../newspaper';

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.sass']
})
export class NewspaperComponent implements OnInit {
  @Input() newspaper : Newspaper;

  constructor() { }

  ngOnInit() {
  }

}
