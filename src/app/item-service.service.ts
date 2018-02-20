import { Injectable } from '@angular/core';
import { mockData } from './mock/data.mock';

@Injectable()
export class ItemServiceService {

  tableData = [];
  isNewForm: boolean = false;
  index: number;

  constructor() { 
    this.tableData = mockData;
  }

}
