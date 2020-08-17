import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-additm',
  templateUrl: './additm.component.html',
  styleUrls: ['./additm.component.css']
})
export class AdditmComponent implements OnInit {
  checkoutForm;

  constructor(
  private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      id: '',
      category: '',
      name: '',
      price: '',
      discount: '',
      description: '',
      upfile: '',
    });
  }
  
  ngOnInit(): void {
  }
  onSubmit() {
        
    this.checkoutForm.reset();

  }
}
