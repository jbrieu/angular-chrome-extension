import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Newspaper } from '../newspaper';
import { Owner } from '../owner';
import { STATIC_DATA } from '../static-data';

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

  getOwners(): Owner[]{
    return this.newspaper.ownersIds.map(id => STATIC_DATA["ownersById"][id]);
  }

}
