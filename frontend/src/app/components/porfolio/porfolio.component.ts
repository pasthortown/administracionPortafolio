import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss']
})
export class PorfolioComponent implements OnInit {

  filter: string = '';
  data: any[] = [];
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
      id: 0,
      year: 0,
      agileGroup: "",
      title: "",
      description: "",
      priority: "",
      sapProject: "",
      front: "",
      country: "",
      contact: "",
      area: "",
      approval: "",
      progress: "",
      customerPriority: "",
      poPriority: "",
      dependency: "",
      complexity: "",
      countryFactor: 0,
      weeks: 0,
      people: 0,
      laborCostPerWeek: 0,
      otherCosts: 0,
      total: 0,
      recurrentCosts: 0,
      roi: 0,
      developmentStart: new Date(),
      developmentEnd: new Date(),
      pilotStart: new Date(),
      pilotEnd: new Date(),
      deploymentStart: new Date(),
      deploymentEnd: new Date(),
      notes: "",
      roi2: 0,
      roi3: 0,
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

  add_new_porfolio_item() {
    this.newPorfolioItem = true;
    this.reset_new_porfolio_item();
    this.new_porfolio_item.id = this.get_new_id();
  }

  save_porfolio_item() {
    this.backendService.post_porfolio_item(this.new_porfolio_item).then( r => {
      this.newPorfolioItem = false;
      this.reset_new_porfolio_item();
      this.refresh();
    }).catch( e => { console.log(e); });
  }

  update_porfolio_item() {
    this.backendService.put_porfolio_item(this.row_selected, this.row_selected.id).then( r => {
      this.edit = false;
      this.refresh();
    }).catch( e => { console.log(e); });
  }

  delete_porfolio_item() {
    this.backendService.delete_porfolio_item(this.row_selected.id).then( r => {
      this.edit = false;
      this.refresh();
    }).catch( e => { console.log(e); });
  }

  refresh() {
    this.newPorfolioItem = false;
    this.edit = false;
    this.data = [];
    this.get_data();
    this.reset_new_porfolio_item();
  }

  get_data() {
    this.backendService.get_porfolio_items().then( r => {
      this.data = r as any[];
      this.filter_table();
    }).catch( e => { console.log(e); });
  }

  toExcel() {
    let headers_string: string = 'No.;Año;Mesa;Título;Descripción;Prioridad;Proyecto SAP;Frente;País;Contacto Requirente;Área;Estado de Aprobación;Progreso;Prioridad Negocio;Prioridad PO;Dependencia;Complejidad;Factor País;Semanas;Personas;Costo Operativo Semanal;Otros Costos;Costo Total;Costos Recurrentes;ROI;Inicio Desarrollo;Fin Desarrollo;Inicio Piloto;Fin Piloto;Inicio Producción;Fin Producción;Notas;ROI 2;ROI 3';
    let ws_data_headers: any[] = headers_string.split(';');
    let ws_data: any[] = [];
    ws_data.push(ws_data_headers);
    this.rows.forEach((row: any) => {
      let ws_data_row: any[] = Object.values(row);
      ws_data.push(ws_data_row);
    });
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(ws_data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Portafolio');
    const filename: string = (new Date()).toLocaleDateString() + '_portafolio.xlsx';
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
