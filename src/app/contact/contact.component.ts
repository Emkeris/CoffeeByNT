import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  successContacts = false;
  submitedContacts = false;


  constructor(private formbuilder: FormBuilder ) {
    this.contactForm = this.formbuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: [null, [Validators.required, Validators.pattern('[0-9]{7,12}')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
   }

  ngOnInit() {

  }

  onSubmitContacts() {
    this.submitedContacts = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.successContacts = true;
  }

}
