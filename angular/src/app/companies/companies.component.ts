import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})

export class CompaniesComponent implements OnInit {
  @Input() companies : Company[];
  selectedCompany: Company;

  constructor() { }

  ngOnInit() {
  }

  onSelect(company: Company): void{
    this.selectedCompany = company;
  }

}
