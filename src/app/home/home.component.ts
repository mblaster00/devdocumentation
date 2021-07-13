import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { CommonServiceService } from "../common-service.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { SlickCarouselComponent } from "ngx-slick-carousel";
declare const $: any;

export interface Doctors {
  id: number;
  doctor_name: string;
  speciality: string;
  Education: string;
  location: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  // encapsulation : ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  @ViewChild("slickModal1") slickModal1: SlickCarouselComponent;
  @ViewChild("slickModal2") slickModal2: SlickCarouselComponent;
  @ViewChild("slickModal3") slickModal3: SlickCarouselComponent;
  specialityList: any = [];
  doctors: any = [];
  slidepage: any;
  employeeCtrl = new FormControl();
  filteredEmployee: Observable<Doctors[]>;
  blogs: any = [];
  keyword = "name";
  searchDoctor = [];
  
  constructor(
    public router: Router,
    public commonService: CommonServiceService
  ) {
    this.filteredEmployee = this.employeeCtrl.valueChanges.pipe(
      startWith(""),
      map((employee) =>
        employee ? this._filterEmployees(employee) : this.doctors.slice()
      )
    );
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getspeciality();
    this.getblogs();
  }

  
  private _filterEmployees(value: string): Doctors[] {
    const filterValue = value.toLowerCase();
    return this.doctors.filter(
      (state) => state.doctor_name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  next() {
    this.slickModal1.slickNext();
  }

  prev() {
    this.slickModal1.slickPrev();
  }

  getspeciality() {
    this.commonService.getSpeciality().subscribe((res) => {
      this.specialityList = res;
    });
  }


  getblogs() {
    this.commonService.getBlogs().subscribe((res) => {
      this.blogs = res;
    });
  }

  nextslide() {
    this.slickModal2.slickNext();
  }

  prevslide() {
    this.slickModal2.slickPrev();
  }

  nextpage() {
    this.slickModal3.slickNext();
  }

  prevpage() {
    this.slickModal3.slickPrev();
  }
}
