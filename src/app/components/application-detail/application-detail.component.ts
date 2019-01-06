import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Application } from 'src/app/models/Application';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss']
})
export class ApplicationDetailComponent implements OnInit, OnDestroy {
  application_id: string;
  application: any;
  private sub: any;

  constructor(private route: ActivatedRoute, private service: ApplicationService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params['id']);
      this.service.getApplicationById(params['id']).subscribe(res => {
        this.application = res.body;
        console.log(this.application);
      });
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
