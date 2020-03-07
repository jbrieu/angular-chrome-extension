import { Component, OnInit, Input } from '@angular/core';
import { Owner } from '../owner';
import { Company } from '../company';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {
  selectedOwner: Owner;
  @Input() owners: Owner [];

  constructor() { }

  ngOnInit() {
  }

  onSelect(owner: Owner): void{
    if (this.selectedOwner != owner)
    {
      this.selectedOwner = owner;
    }else
    {
      this.selectedOwner = null;
    }
  }

  getCompaniesFromAllOwners(): Company[]{
    var allCompanies = [];
    this.owners.forEach(owner => {
      allCompanies= allCompanies.concat(owner.companies);
    });
    return allCompanies;
  }

}
