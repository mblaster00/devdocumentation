import { Component, OnInit } from "@angular/core";
import { Event, NavigationStart, Router } from "@angular/router";
import { CommonServiceService } from "../common-service.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-sandbox",
  templateUrl: "./sandbox.component.html",
  styleUrls: ["./sandbox.component.css"],
})
export class PatientsComponent implements OnInit {
  adminShow: boolean = true;
  splitVal;
  base = "Sandbox";
  page = "Dashboard";
  url;
  patientSidebar: boolean = false;
  constructor(
    private router: Router,
    location: Location,
    public commonService: CommonServiceService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url === "/sandbox/dashboard" ||
          event.url === "/sandbox/users/register" ||
          event.url === "/sandbox/users/register/console" ||
          event.url === "/sandbox/users/login" ||
          event.url === "/sandbox/users/login/console" ||
          event.url === "/sandbox/users/apiKey" ||
          event.url === "/sandbox/users/apiKey/console" ||
          event.url === "/sandbox/quotations/requestQuote" ||
          event.url === "/sandbox/quotations/requestQuote/console" ||
          event.url === "/sandbox/delivery/requestDelivery" ||
          event.url === "/sandbox/delivery/requestDelivery/console" ||
          event.url === "/sandbox/component"
        ) {
          this.patientSidebar = true;
        } else {
          this.patientSidebar = false;
        }
      }
    });
    this.url = location.path();
    if (
      this.url === "/sandbox/dashboard" ||
      this.url === "/sandbox/users/register" ||
      this.url === "/sandbox/users/register/console" ||
      this.url === "/sandbox/users/login" ||
      this.url === "/sandbox/users/login/console" ||
      this.url === "/sandbox/users/apiKey" ||
      this.url === "/sandbox/users/apiKey/console" ||
      this.url === "/sandbox/quotations" ||
      this.url === "/sandbox/quotations/requestQuote" ||
      this.url === "/sandbox/quotations/requestQuote/console" ||
      this.url === "/sandbox/delivery/requestDelivery" ||
      this.url === "/sandbox/delivery/requestDelivery/console" ||
      this.url === "/sandbox/component"
    ) {
      this.patientSidebar = true;
    } else {
      this.patientSidebar = false;
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.splitVal = event.url.split("/");
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
      }
    });
  }
}
