import { Component, OnInit } from "@angular/core";
import { Event, NavigationStart, Router } from "@angular/router";
import { CommonServiceService } from "../common-service.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-documentation",
  templateUrl: "./documentation.component.html",
  styleUrls: ["./documentation.component.css"],
})
export class DocumentationComponent implements OnInit {
  splitVal;
  base = "Documentation";
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
          event.url === "/documentation/home" ||
          event.url === "/documentation/started"
        ) {
          this.patientSidebar = true;
        } else {
          this.patientSidebar = false;
        }
      }
    });
    this.url = location.path();
    if (
      this.url === "/documentation/home" ||
      this.url === "/documentation/started"
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
