import { Component, OnInit } from "@angular/core";
import { Event, NavigationStart, Router } from "@angular/router";
import { CommonServiceService } from "../common-service.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-client",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"],
})
export class ClientsComponent implements OnInit {
  splitVal;
  base = "Client";
  page = "Home";
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
          event.url === "/clients/home" ||
          event.url === "/clients/change-password"
        ) {
          this.patientSidebar = true;
        } else {
          this.patientSidebar = true;
        }
      }
    });
    this.url = location.path();
    if (
      this.url === "/clients/home" ||
      this.url === "/clients/change-password"
    ) {
      this.patientSidebar = true;
    } else {
      this.patientSidebar = true;
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
