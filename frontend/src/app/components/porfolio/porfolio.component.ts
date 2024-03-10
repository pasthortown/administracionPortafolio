import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss']
})
export class PorfolioComponent implements OnInit {

  filter: string = '';
  rows: any[] = [];
  row_selected: any = null;
  modalReference: any = null;
  newPorfolioItem: boolean = false;
  new_porfolio_item: any = null;
  edit: boolean = false;

  constructor(private modalService: NgbModal, private backendService: BackendService) {}

  ngOnInit(): void {
    this.refresh();
  }

  open_modal(content: any) {
    this.modalReference = this.modalService.open(content, { centered: true, size: 'lg', backdrop: 'static', keyboard: false });
  }

  reset_new_porfolio_item() {
    this.new_porfolio_item = {
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

  add_new_porfolio_item() {
    this.newPorfolioItem = true;
    this.reset_new_porfolio_item();
    this.new_porfolio_item.Id = this.get_new_id();
  }

  save_porfolio_item() {
    this.backendService.post_porfolio_item(this.new_porfolio_item).then( r => {
      this.newPorfolioItem = false;
      this.reset_new_porfolio_item();
    }).catch( e => { console.log(e); });
  }

  update_porfolio_item() {
    this.backendService.put_porfolio_item(this.row_selected, this.row_selected.Id).then( r => {
      this.edit = false;
      this.refresh();
    }).catch( e => { console.log(e); });
  }

  delete_porfolio_item() {
    this.backendService.delete_porfolio_item(this.row_selected.Id).then( r => {
      this.edit = false;
      this.refresh();
    }).catch( e => { console.log(e); });
  }

  refresh() {
    this.newPorfolioItem = false;
    this.edit = false;
    this.reset_new_porfolio_item();
  }

  toExcel() {

  }

  filter_table() {

  }
}
