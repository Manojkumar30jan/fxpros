import { Component, Input,AfterViewInit  } from '@angular/core';
// import { trigger, state, style, transition, animate } from '@angular/animations';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements AfterViewInit {

  

  data:any;
  first:string="manoj";
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^\d+$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      newsletter: [false],  
      terms: [false, Validators.required] 
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  get name() { return this.registrationForm.get('name'); }
  get email() { return this.registrationForm.get('email'); }
  get phone() { return this.registrationForm.get('phone');}
  get password() { return this.registrationForm.get('password'); }
  get country() {  return this.registrationForm.get('country'); }
  get confirmPassword() { return this.registrationForm.get('confirmPassword'); }
  get gender() {
    return this.registrationForm.get('gender');}

  onSubmit() {
    console.log(this.registrationForm.value);
  }
  reset(){
    this.registrationForm.reset();
  }
  receiveData(event:any){
// console.log(event);
    this.data=event;
  }

  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  }


  
}