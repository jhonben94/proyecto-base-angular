import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SortableHeader, SortEvent } from 'src/app/directives/sortable.directive';
import { Observable } from 'rxjs';
import { DataTableService } from 'src/app/services/data-table.service';

@Component({
  selector: 'app-tabla-basic',
  templateUrl: './tabla-basic.component.html',
  styleUrls: ['./tabla-basic.component.scss']
})
export class TablaBasicComponent implements OnInit {


  @ViewChildren(SortableHeader) headers: QueryList<SortableHeader>;

  data$: Observable<any[]>;
  total$: Observable<number>;
  pageSize: number =5;
  pageIndex: number;

  constructor(private service: DataTableService) { }

  ngOnInit() {
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.buscar(column,direction);
  }
  buscar(column,direction){
    const params ={
      cantidad: this.pageSize,
      pagina: this.pageIndex,
      sortBy: column,
      sortOrder: direction,
      filtros: JSON.stringify({})
    }

    this.service.listarRecurso(params).subscribe( (res) =>{


    });
    
  }

}
