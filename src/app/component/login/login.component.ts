import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../Service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  myForm: FormGroup;
  response: any;

  constructor(private login_service: LoginService, private fb: FormBuilder) {}

  async login() {
    try {
      const response = await this.login_service.login();
      localStorage.setItem('uid', response.user.uid);
    } catch (error) {
      console.log(error);
    }
  }

  async create() {
    try {
      const response = await this.login_service.createUser();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  submitForm() {
    this.response = this.myForm.getRawValue();
  }

  validation() {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      skills: new FormArray([], Validators.required),
    });
  }

  get skills(): FormArray {
    return this.myForm.get('skills') as FormArray;
  }

  addFeild() {
    this.skills.push(new FormControl('', Validators.required));
  }

  remove(index) {
    this.skills.length > 1 ? this.skills.removeAt(index) : '';
  }

  ngOnInit(): void {
    this.login();
    this.validation();
    this.addFeild();
    // this.create();
  }
}
