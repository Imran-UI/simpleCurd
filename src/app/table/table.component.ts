import { Component, OnInit } from '@angular/core';
import { EditFormComponent } from '../edit-form/edit-form.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableData = [];

  constructor(public dialog: MatDialog , public itemService: ItemServiceService) { }

  openDialog(row): void {
    let dialogRef = this.dialog.open(EditFormComponent, {
      width: '50%',
      data: { "id": row.id,
      "name": row.name,
      "description": row.description,
      "price": row.price }
    }, );

    this.itemService.isNewForm = false;

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openNew() {
    let dialogRef = this.dialog.open(EditFormComponent, {
      width: '50%',
      data: {
        "id": '',
        "name": '',
        "description": '',
        "price": ''
      }
    }, );

    this.itemService.isNewForm = true;

    dialogRef.afterClosed().subscribe(result => {
    });

  }

  removeItem(row) {
    this.itemService.tableData.splice(row.name,1);
  }

  ngOnInit() {
    this.tableData = this.itemService.tableData;
  }

}
