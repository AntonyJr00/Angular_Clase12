import { Component, OnInit } from '@angular/core';

interface ContactForm {
  name: string;
  checkAdult: boolean;
  departament: string;
  comment: string;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  model = {
    name: '',
    checkAdult: false,
    departament: '',
    comment: '',
  };

  constructor() {}

  ngOnInit(): void {}
  onSubmit(values: any): void {
    console.log('form values:', values);
  }
}
