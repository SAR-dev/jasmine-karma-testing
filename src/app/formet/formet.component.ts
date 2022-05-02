import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formet',
  templateUrl: './formet.component.html',
  styleUrls: ['./formet.component.css'],
})
export class FormetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = '';
  email: string = '';
  message: string = '';
  errors = { name: '', email: '', message: '' };

  onChange(e: any) {
    const key = e.target.name;
    if (key === 'name') {
      this.name = e.target.value;
    } else if (key === 'email') {
      this.email = e.target.value;
    } else if (key === 'message') {
      this.message = e.target.value;
    }
  }

  onSubmit() {
    this.name.length === 0
      ? (this.errors.name = 'Name is required')
      : (this.errors.name = '');
    this.email.length === 0
      ? (this.errors.email = 'Email is required')
      : (this.errors.email = '');
    this.message.length === 0
      ? (this.errors.message = 'Message is required')
      : (this.errors.message = '');

    const pattern = /^\S+@\S+\.\S+$/;
    if (this.email.length !== 0) {
      !pattern.test(this.email)
        ? (this.errors.email = 'Email pattern is invalid')
        : (this.errors.email = '');
    }
    console.log('Submitted');
  }
}
