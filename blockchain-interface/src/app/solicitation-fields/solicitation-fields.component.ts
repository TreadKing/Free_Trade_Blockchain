import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-solicitation-fields',
  templateUrl: './solicitation-fields.component.html',
  styleUrls: ['./solicitation-fields.component.css']
})
export class SolicitationFieldsComponent implements OnInit {

  partNum: string;
  partDesc: string;
  locationCode: string; 
  importCountry: string;
  periodStart: string;
  periodEnd: string;
  classDigits: string;
  
  isClicked : boolean = true;
  constructor() { }

  toggleWord()
  {
    this.isClicked = !this.isClicked;
  }

  ngOnInit(): void {

  }

}
