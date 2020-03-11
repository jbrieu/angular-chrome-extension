import { Component, OnInit, Input } from '@angular/core';
import { Owner } from '../owner';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.scss']
})
export class OwnerDetailComponent implements OnInit {
  @Input() owner: Owner;

  constructor() { }

  ngOnInit() {
  }

}
