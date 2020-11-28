import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
name: string;
email: string;
message: string;

  constructor() { }

  ngOnInit(): void {
  }
  processForm() {
    const mesInfo = `Mon nom est ${this.name}. Mon email est ${this.email}. Mon message est ${this.message}`
    alert(mesInfo)
    console.log(mesInfo)
  }

}