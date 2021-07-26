import { UsersService } from './../../services/users.service';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  error: boolean = false;
  bodyResponse: any;
  myForm: FormGroup;
  
  constructor(
    public router: Router,
    public commonService: CommonServiceService,
    private userService: UsersService,
    private elementRef: ElementRef, private renderer: Renderer2,
    private formBuilder: FormBuilder,
  ) {
    this.validation()
  }

  ngOnInit(): void { }

  validation() {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngAfterViewInit() { 
    this.renderer.listen(this.elementRef.nativeElement, 'change', () => { this.verify(event) });
  }

  verify(event) {
    let query = $(`input[name="${event.target.name}"]`)
    this.elementRef.nativeElement = query.next()
    this.elementRef.nativeElement.addClass("check");
    if (query.val() == "") { this.elementRef.nativeElement.removeClass("check"); }
  }

  Error() {
    var query = $(`.alert-danger`);
    query.click(function(){                     
      let attr = $(this).attr('class').split(" ").pop();
      (attr != "error") ? query.addClass("error") : query.removeClass("error")
    });
    this.error = false;
  }

  submit() {
    let data = {
      username: this.myForm.value.username,
      password: this.myForm.value.password
    }
    this.userService.login(data).subscribe(res => {
      this.bodyResponse = res;
      localStorage.setItem('auth', 'true');
      localStorage.setItem('x-access-token', this.bodyResponse.accessToken);
      localStorage.setItem('current_user', this.bodyResponse.data._id)
      this.router.navigateByUrl('/clients/home').then(() => {
        window.location.reload();
      });
    }, err => {
      this.error = true
      this.bodyResponse = err;
    })
  }
}
