import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemServiceService } from '../item-service.service';
import * as _ from "lodash";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

 

  constructor(public dialogRef: MatDialogRef<EditFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any , public itemService: ItemServiceService) { }

  closeDialog() {
    this.dialogRef.close();
  }

  onSave(item) {
    let self = this;
    if (this.itemService.isNewForm) {
      this.itemService.tableData.push(item);
      this.closeDialog();
    } else {
       let clonedItem = _.clone(item);
      let index = _.findIndex(this.itemService.tableData, function (Item) {
        return Item.name === self.data.name
      });
      this.itemService.tableData[index] = item;
      this.closeDialog();
    }
   
  
  }

  ngOnInit() {
  }

}
