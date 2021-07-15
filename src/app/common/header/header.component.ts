import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  Inject,
} from '@angular/core';
import { Event, NavigationStart, Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Location } from '@angular/common';
import { CommonServiceService } from './../../common-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  auth: boolean = false;
  isPatient: boolean = false;
  splitVal;
  url;
  base;
  page;
  constructor(
    @Inject(DOCUMENT) private document,
    private cdr: ChangeDetectorRef,
    public router: Router,
    location: Location,
    public commonService: CommonServiceService
  ) {
    this.commonService.message.subscribe((res) => {
      if (res === 'patientLogin') {
        this.auth = true;
        // this.isPatient = true;
      }
      if (res === 'doctorLogin') {
        this.auth = true;
        // this.isPatient = false;
      }
      if (res === 'logout') {
        this.auth = false;
        this.isPatient = false;
      }
    });
  }

  ngOnInit(): void {

    if (this.base === 'home') {
      $('#header').addClass('min-header');
    } else {
      $('#header').removeClass('min-header');
    }
    if (localStorage.getItem('auth') === 'true') {
      this.auth = true;
      this.isPatient =
        localStorage.getItem('patient') === 'true' ? true : false;
    }
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.splitVal = event.url.split('/');
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
        if (
          (this.base === 'patients' && this.page === 'dashboard') ||
          this.base === '' ||
          this.base === 'Register' ||
          this.base === 'login-page' ||
          this.base === 'home' ||
          this.base === 'sandbox' ||
          this.base === 'documentation' ||
          this.base === 'faqs'
        ) {
          this.auth = false;
        } else {
          this.auth = true;
        }
      }
      if (event instanceof NavigationEnd) {
        $('html').removeClass('menu-opened');
        $('.sidebar-overlay').removeClass('opened');
        $('main-wrapper').removeClass('slide-nav');
      }
    });
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        $("html").removeClass("menu-opened");
        $(".sidebar-overlay").removeClass("opened");
        $(".main-wrapper").removeClass("slide-nav");
      }
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.loadDynmicallyScript("assets/js/script.js");
  }
  loadDynmicallyScript(js) {
    var script = document.createElement("script");
    script.src = js;
    script.async = false;
    document.head.appendChild(script);
    script.onload = () => this.doSomethingWhenScriptIsLoaded();
  }
  doSomethingWhenScriptIsLoaded() { }
  change(name) {
    this.page = name;
    this.commonService.nextmessage("main");
  }

  addStyle(val) {
    if (val === "doctor") {
      if (document.getElementById("doctor").style.display == "block") {
        document.getElementById("doctor").style.display = "none";
      } else {
        document.getElementById("doctor").style.display = "block";
      }
    }
    if (val === "patient") {
      if (document.getElementById("patient").style.display == "block") {
        document.getElementById("patient").style.display = "none";
      } else {
        document.getElementById("patient").style.display = "block";
      }
    }
    if (val === "pages") {
      if (document.getElementById("pages").style.display == "block") {
        document.getElementById("pages").style.display = "none";
      } else {
        document.getElementById("pages").style.display = "block";
      }
    }
    if (val === "blog") {
      if (document.getElementById("blog").style.display == "block") {
        document.getElementById("blog").style.display = "none";
      } else {
        document.getElementById("blog").style.display = "block";
      }
    }
  }

  logout() {
    localStorage.clear();
    this.auth = false;
    this.isPatient = false;
    this.router.navigate(['/login-page']);
  }

  home() {
    this.commonService.nextmessage('main');
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['/']);
    });
  }

  navigate(name) {
    this.page = name;
    if (name === 'Admin') {
      this.router.navigate(['/admin']);
      this.commonService.nextmessage('admin');
    }
  }
}
