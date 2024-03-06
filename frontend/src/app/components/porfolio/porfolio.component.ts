import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss']
})
export class PorfolioComponent {

  filter: string = '';
  rows: any[] = [];
  row_selected: any = null;
  modalReference: any = null;

  constructor(private modalService: NgbModal) {}

  open_modal(content: any, type: string) {
    this.modalReference = this.modalService.open(content, { centered: true, size: 'lg', backdrop: 'static', keyboard: false });
  }

  refresh() {

  }

  toExcel() {

  }

  filter_table() {

  }
}
