import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/services/users.service';
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  error: boolean = false;
  success: boolean = false;
  bodyResponse: any;
  myForm: FormGroup;

  constructor(
    public userService: UsersService,
    private elementRef: ElementRef, private renderer: Renderer2,
    private formBuilder: FormBuilder,
    public router: Router
  ) {
    this.validation()
   }

  ngOnInit(): void {}

  validation() {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      phone: [''],
      companyName: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
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
    query.click(function () {
      let attr = $(this).attr('class').split(" ").pop();
      (attr != "error") ? query.addClass("error") : query.removeClass("error")
    });
    this.error = false;
  }

  signup() {
    let params = {
      username: this.myForm.value.username,
      email: this.myForm.value.email,
      phone: this.myForm.value.phone,
      companyName: this.myForm.value.companyName,
      country: this.myForm.value.country,
      password: this.myForm.value.password
    };
    this.userService.register(params).subscribe((res) => {
      this.success = true
      this.router.navigate(['/login-page']);
    }, err => {
      this.error = true
      this.bodyResponse = err;
    });
  }
}
