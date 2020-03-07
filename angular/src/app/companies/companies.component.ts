import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.sass']
})

export class CompaniesComponent implements OnInit {
  @Input() companies : Company[];
  constructor() { }

  ngOnInit() {
  }

}
