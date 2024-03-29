import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewEncapsulation,
  AfterViewChecked,
} from "@angular/core";
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute,
} from "@angular/router";
import { Location } from "@angular/common";
import { CommonServiceService } from "./common-service.service";
import { LinkService } from "./link.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit, AfterViewChecked {
  title = 'Ecommerce API';
  url;
  loadFooter = false;
  show: boolean = true;
  hideFooter: boolean = false;
  splitVal;
  base;
  page;
  constructor(
    private activeRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    public Router: Router,
    location: Location,
    public commonServic: CommonServiceService,
    private link: LinkService
  ) {
    Router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.splitVal = event.url.split("/");
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
        if (
          event.url == "/login" ||
          event.url == "/forgot-password" ||
          event.url == "/Register"
        ) {
          document.querySelector("body").classList.add("account-page");
          if (event.url == "/login") {
            this.Router.navigateByUrl("/login");
          }
        } else {
          // document.querySelector('body').classList.add('mat-typography');
        }
      }
    });
    this.url = location.path();
    this.show = this.url.includes("admin") ? false : true;
    this.commonServic.message.subscribe((res) => {
      if (res === "admin") {
        this.show = false;
        this.hideFooter = true;
      } else if (res === "main") {
        this.show = true;
        this.hideFooter = false;
      } else if (res === "chat") {
        this.show = true;
        this.hideFooter = true;
      } else {
        this.show = true;
        this.hideFooter = false;
      }
    });
  }

  ngOnInit() {
    //setTimeout(() => (this.loadFooter = true), 2000);
    setTimeout(() => (this.loadFooter = true));
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
}