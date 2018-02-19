import { Injectable } from '@angular/core';
import { mockData } from './mock/data.mock';

@Injectable()
export class ItemServiceService {

  tableData = [];
  isNewForm: boolean = false;

  constructor() { 
    this.tableData = mockData;
  }

}
