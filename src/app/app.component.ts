import { Component, ViewChild } from '@angular/core';
import { NgForm } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  dataForm = {
    test: ''
  };
  public errors;

  public submit() {
    console.log("submit", this.form);
  }

  public errorBack() {
    this.errors = {
      status: 'error',
      errors: {
        errors: [
          'error message 1',
          'error message 2'
        ],
        children: {
          test: {
            errors: [ 'error message 3' ]
          }
        }
      }
    };
  }
}
