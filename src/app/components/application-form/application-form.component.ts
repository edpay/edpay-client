import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  applied = false;
  applicationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.applicationForm = this.fb.group({
      applicationCourse: ['', Validators.compose([Validators.required])],
      studentFirstName: ['', Validators.compose([Validators.required])],
      studentMiddleName: ['', Validators.compose([Validators.required])],
      studentLastName: ['', Validators.compose([Validators.required])],
      studentDateOfBirth: ['', Validators.compose([Validators.required])],
      studentEmail: ['', Validators.compose([Validators.required, Validators.email])],
      studentPhoneNumber: ['', Validators.compose([Validators.required])],
      studentAddress: this.fb.group({
        studentAddressLine1: ['', Validators.compose([Validators.required])],
        studentAddressLine2: ['', Validators.compose([Validators.required])],
        studentAddressZipCode: ['', Validators.compose([Validators.required])],
      }),
      studentCategory: ['', Validators.compose([Validators.required])],
      gender: this.fb.group({
        studentGender: ['', Validators.compose([Validators.required])]
      }),
      studentSubCaste: ['', Validators.compose([Validators.required])],
      sportsQuota: ['', Validators.compose([Validators.required])],
      studentGuardianName: ['', Validators.compose([Validators.required])],
      studentGuardianIncome: ['', Validators.compose([Validators.required])],
      studentPrevSchoolName: ['', Validators.compose([Validators.required])],
      studentMediumOfStudy: ['', Validators.compose([Validators.required])],
      studentPrevSchoolAddress: this.fb.group({
        studentPrevSchoolAddLine1: ['', Validators.compose([Validators.required])],
        studentPrevSchoolAddLine2: ['', Validators.compose([Validators.required])],
        studentPrevSchoolAddZip: ['', Validators.compose([Validators.required])]
      }),
      studentPrevExamRegNo: ['', Validators.compose([Validators.required])],
      studentPrevExamPassYear: ['', Validators.compose([Validators.required])],
      studentPrevExamPercent: ['', Validators.compose([Validators.required])],
      studentAboutMe: ['', Validators.compose([Validators.required])]
    });
  }

  get f() { return this.applicationForm.controls; }

  onApply() {
    this.applied = true;
    console.log(this.applicationForm);
    console.log(JSON.stringify(this.applicationForm.value));
  }

}
