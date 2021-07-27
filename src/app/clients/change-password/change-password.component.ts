import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  userId: string = localStorage.getItem('current_user');
  token: string = localStorage.getItem('x-access-token');
  bodyResponse: any;
  myForm: FormGroup;

  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder,
  ) { 
    this.validation()
  }

  ngOnInit(): void {
  }

  validation() {
    this.myForm = this.formBuilder.group({
      oldpassword: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit() {
    let selector = $(".panel:last #httpResponse")
    if (selector.length != 0) { selector.empty() }
    let body = {
      userId: this.userId,
      token: this.token,
      body: {
        oldpassword: this.myForm.value.oldpassword,
        password: this.myForm.value.password
      }
    }
    this.userService.updatePassword(body).subscribe(res => {
      this.bodyResponse = res;
      Swal.fire({
        icon: 'success',
        title: 'Congratulations',
        text: 'Your password is updated',
        confirmButtonColor: '#000000',
      });
    }, err => {
      //console.log('error =====>', err)
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: err.error.message,
        confirmButtonColor: '#000000',
      });
    })
  }

}
