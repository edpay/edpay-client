import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InstitutionService } from 'src/app/services/institution.service';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss']
})
export class InstitutionsComponent implements OnInit {

  institute: any = [];

  constructor(public institutes: InstitutionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getInstitutes();
  }

  getInstitutes() {
    this.institute = [];
    this.institutes.getInstitute().subscribe((data: {}) => {
      console.log(data);
      this.institute = data;
    });
  }

}
