import { Component, OnInit } from '@angular/core';

import { FormioAuthService } from 'angular-formio/auth';
import { NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(public auth: FormioAuthService) { }

  ngOnInit() {
  }

  onSubmit(homeForm: NgForm) {

    console.log(homeForm);
  }
}
