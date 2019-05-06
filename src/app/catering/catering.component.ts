import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.scss']
})
export class CateringComponent implements OnInit {
  cateringForm: FormGroup;
  successCateringForm = false;
  submitedCateringForm = false;

  constructor(private fomrbuilder: FormBuilder ) { }

  ngOnInit() {
    this.cateringForm = this.fomrbuilder.group({
      date: [''],
      numbOfPeople: [null, [Validators.required, Validators.max(81)]],
      eventType: ['', Validators.required],
      phoneNumber: [null, [Validators.required, Validators.pattern('[0-9]{7,12}')]],
      time: [null],
      hours: [null, [Validators.required, Validators.max(12)]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmitCatering() {
    this.submitedCateringForm = true;
    if (this.cateringForm.invalid) {
      return;
    }

    this.successCateringForm = true;
  }

}
