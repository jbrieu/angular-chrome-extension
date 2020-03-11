import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company';
import { STATIC_DATA } from '../static-data';
import { Owner } from '../owner';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})

export class CompaniesComponent implements OnInit {
  @Input() companies : Company[];

  constructor() { }

  ngOnInit() {
  }

  getCompanyOwners(company: Company): Owner[]{
   return company.ownersIds.map(id => STATIC_DATA["ownersById"][id]);
  }
}
