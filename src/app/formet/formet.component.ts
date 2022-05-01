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
    }
    if (key === 'email') {
      this.email = e.target.value;
    }
    if (key === 'message') {
      this.message = e.target.value;
    }
  }

  onSubmit() {
    this.name.length === 0 ? (this.errors.name = 'Name is required') : '';
    this.email.length === 0 ? (this.errors.email = 'Email is required') : '';
    this.message.length === 0 ? (this.errors.message = 'Message is required') : '';
    const pattern = /^\S+@\S+\.\S+$/;
    this.email.length !== 0 && !pattern.test(this.email) ? (this.errors.email = 'Email pattern is invalid') : '';
    console.log('Submitted');
  }
}
