import { Component, OnInit } from '@angular/core';
import { EditFormComponent } from '../edit-form/edit-form.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ItemServiceService } from '../item-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableData = [];
  index: number;

  constructor(public dialog: MatDialog , public itemService: ItemServiceService) { }

  openDialog(row): void {
    let dialogRef = this.dialog.open(EditFormComponent, {
      width: '50%',
      data: { "id": row.id,
      "name": row.name,
      "description": row.description,
      "price": row.price }
    }, );

    this.itemService.index = _.findIndex(this.itemService.tableData, function (Item) {
      return Item.name === row.name;
    });
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
   let index = _.findIndex(this.itemService.tableData, function (Item) {
      return Item.name === row.name;
    });
    this.itemService.tableData.splice(index,1);
  }

  ngOnInit() {
    this.tableData = this.itemService.tableData;
    this.index = this.itemService.index;
  }

}
