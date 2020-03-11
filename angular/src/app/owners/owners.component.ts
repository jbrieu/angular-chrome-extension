import { Component, OnInit, Input} from '@angular/core';
import { Owner } from '../owner';
import { Company } from '../company';
import { STATIC_DATA } from '../static-data';

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


  getCompaniesForOwner(owner: Owner): Company[] {
    return owner.companiesIds.map(id => STATIC_DATA["companiesById"][id]);
  }

  getCompaniesFromAllOwners(): Company[]{
    var allCompanies = [];
    this.owners.forEach(owner => {
      allCompanies = allCompanies.concat(owner.companiesIds.map(id => {
        return STATIC_DATA["companiesById"][id];
      }));
    });
    return allCompanies;
  }

}
