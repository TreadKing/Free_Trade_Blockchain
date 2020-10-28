import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-solicitation-fields',
  templateUrl: './solicitation-fields.component.html',
  styleUrls: ['./solicitation-fields.component.css']
})
export class SolicitationFieldsComponent implements OnInit {
  
  partNum: number;
  partDesc: string;
  locationCode: string; 
  importCountry: string;

  constructor() { }

  ngOnInit(): void {

  }

}
