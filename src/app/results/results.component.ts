import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onclickfeeStructure(){
    this.router.navigateByUrl('FeeStructure')
  }

  onclickCalendar(){
    this.router.navigateByUrl('AcademicCalender')
  }

  onclickSMC(){
    this.router.navigateByUrl('List_of_SMC')
  }

  onclickresult(){
    this.router.navigateByUrl('Link_of_ThreeYearResult')
  }
}
