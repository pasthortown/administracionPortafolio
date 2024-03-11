import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-porfoliocosts',
  templateUrl: './porfoliocosts.component.html',
  styleUrl: './porfoliocosts.component.scss'
})
export class PorfoliocostsComponent implements OnInit {

  filter: string = '';
  rows: any[] = [];
  row_selected: any = null;
  newPorfolioCost: boolean = false;
  new_porfolio_cost: any = null;
  edit: boolean = false;

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.refresh();
  }

  reset_new_porfolio_cost() {
    this.new_porfolio_cost = {
      Id: 0,
      Year: 0,
      AgileGroup: "",
      Title: "",
      Description: "",
      Priority: "",
      SapProject: "",
      Front: "",
      Country: "",
      Contact: "",
      Area: "",
      Approval: "",
      Progress: 0,
      CustomerPriority: 0,
      PoPriority: 0,
      Dependency: "",
      Complexity: 0,
      CountryFactor: 0,
      Weeks: 0,
      People: 0,
      LaborCostPerWeek: 0,
      OtherCosts: 0,
      Total: 0,
      RecurrentCosts: 0,
      Roi: 0,
      DevelopmentStart: new Date(),
      DevelopmentEnd: new Date(),
      PilotStart: new Date(),
      PilotEnd: new Date(),
      DeploymentStart: new Date(),
      DeploymentEnd: new Date(),
      Notes: "",
      Roi2: 0,
      Roi3: 0,
    }
  }

  get_new_id(): Number {
    let max_id = 0;
    this.rows.forEach((row: any) => {
      if (row.Id > max_id) {
        max_id = row.Id;
      }
    });
    return max_id + 1;
  }

  add_new_porfolio_cost() {
    this.newPorfolioCost = true;
    this.reset_new_porfolio_cost();
    this.new_porfolio_cost.Id = this.get_new_id();
  }

  save_porfolio_cost() {
    this.backendService.post_porfolio_cost(this.new_porfolio_cost).then( r => {
      this.newPorfolioCost = false;
      this.reset_new_porfolio_cost();
    }).catch( e => { console.log(e); });
  }

  update_porfolio_cost() {
    this.backendService.put_porfolio_cost(this.row_selected, this.row_selected.Id).then( r => {
      this.edit = false;
      this.refresh();
    }).catch( e => { console.log(e); });
  }

  delete_porfolio_cost() {
    this.backendService.delete_porfolio_cost(this.row_selected.Id).then( r => {
      this.edit = false;
      this.refresh();
    }).catch( e => { console.log(e); });
  }

  refresh() {
    this.newPorfolioCost = false;
    this.edit = false;
    this.reset_new_porfolio_cost();
  }

  toExcel() {

  }

  filter_table() {

  }
}
