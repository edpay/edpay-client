import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/Application';
import { ApplicationService } from 'src/app/services/application.service';
import { PagerService } from 'src/app/services/pager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  applications: Application[];

  pager: any = {};

  pagedItems: Application[];

  constructor(private applicationService: ApplicationService, private pagerService: PagerService) { }

  ngOnInit() {
    this.applicationService.getApplications().subscribe(res => {
      this.applications = res.body;
      this.setPage(1);
    });
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.applications.length, page);
    this.pagedItems = this.applications.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  onApproveClick(_application: Application) {
    console.log('Approved');
    // TODO: POST to server to change status
    _application.status = 'Approved';

  }

  onRejectClick(_application: Application) {
    console.log('Rejected');
    // TODO: POST to server to change status
    _application.status = 'Rejected';
  }

  onRequestMoreInfoClick(_application: Application) {
    console.log('Need more info');
    // TODO: POST to server to change status
    _application.status = 'Need more info';
  }
}
