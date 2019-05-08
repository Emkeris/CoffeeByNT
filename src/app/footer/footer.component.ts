import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  subscriptionForm: FormGroup;
  submittedEmail = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subscriptionForm = this.formBuilder.group({
      emailOne: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmitEmail() {
    this.submittedEmail = true;

    if (this.subscriptionForm.invalid) {
      return;
    }

    this.success = true;
  }
}
