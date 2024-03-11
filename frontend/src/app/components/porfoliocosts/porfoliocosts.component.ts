import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-porfoliocosts',
  templateUrl: './porfoliocosts.component.html',
  styleUrl: './porfoliocosts.component.scss'
})
export class PorfoliocostsComponent implements OnInit, OnChanges {

  @Input('porfolioItemid') porfolioItemid: number = 0;
  filter: string = '';
  data: any[] = [];
  rows: any[] = [];
  row_selected: any = null;
  newPorfolioCost: boolean = false;
  new_porfolio_cost: any = null;
  edit: boolean = false;

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  reset_new_porfolio_cost() {
    this.new_porfolio_cost = {
      id: 0,
      porfolioItemid: 0,
      code: "",
      title: "",
      description: "",
      subTotal: "",
      total: "",
      date: new Date()
    }
  }

  select_row(row: any) {
    if (!this.edit) {
      this.row_selected = row;
    }
  }

  get_new_id(): Number {
    let max_id = 0;
    this.rows.forEach((row: any) => {
      if (row.id > max_id) {
        max_id = row.id;
      }
    });
    return max_id + 1;
  }

  add_new_porfolio_cost() {
    this.newPorfolioCost = true;
    this.reset_new_porfolio_cost();
    this.new_porfolio_cost.id = this.get_new_id();
    this.new_porfolio_cost.porfolioItemId = this.porfolioItemid;
    console.log(this.new_porfolio_cost);
  }

  save_porfolio_cost() {
    this.backendService.post_porfolio_cost(this.new_porfolio_cost).then( r => {
      this.newPorfolioCost = false;
      this.reset_new_porfolio_cost();
      this.refresh();
    }).catch( e => { console.log(e); });
  }

  update_porfolio_cost() {
    this.backendService.put_porfolio_cost(this.row_selected, this.row_selected.id).then( r => {
      this.edit = false;
      this.refresh();
    }).catch( e => { console.log(e); });
  }

  delete_porfolio_cost() {
    this.backendService.delete_porfolio_cost(this.row_selected.id).then( r => {
      this.edit = false;
      this.refresh();
    }).catch( e => { console.log(e); });
  }

  refresh() {
    this.newPorfolioCost = false;
    this.edit = false;
    this.data = [];
    this.get_data();
    this.reset_new_porfolio_cost();
  }

  get_data() {
    this.backendService.get_porfolio_cost(this.porfolioItemid).then( r => {
      this.data = r as any[];
      this.filter_table();
    }).catch( e => { console.log(e); this.data = []; });
  }

  toExcel() {
    let headers_string: string = 'No.;No. Item Portafolio;Código;Título;Descripción;Sub Total;Impuestos;Total;Fecha;';
    let ws_data_headers: any[] = headers_string.split(';');
    let ws_data: any[] = [];
    ws_data.push(ws_data_headers);
    this.rows.forEach((row: any) => {
      let ws_data_row: any[] = Object.values(row);
      ws_data.push(ws_data_row);
    });
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(ws_data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Costos Portafolio ' + this.porfolioItemid.toString());
    const filename: string = (new Date()).toLocaleDateString() + '_costos_portafolio_' + this.porfolioItemid.toString() + '.xlsx';
    XLSX.writeFile(wb, filename);
  }

  filter_table() {
    this.rows = this.search();
  }

  search(): any[] {
    const term = this.filter.toLowerCase();
    return this.data.filter((row: any) => {
      return Object.values(row).some((value: any) => {
        if (typeof value === 'string' || typeof value === 'number') {
          return value.toString().toLowerCase().includes(term);
        }
        return false;
      });
    });
  }
}
