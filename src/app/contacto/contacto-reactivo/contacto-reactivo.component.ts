import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-reactivo',
  templateUrl: './contacto-reactivo.component.html',
  styleUrls: ['./contacto-reactivo.component.css'],
})
export class ContactoReactivoComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit(): void {
    console.log('form ->', this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      checkAdult: ['', [Validators.required]],
      departament: [''],
      comment: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
}
