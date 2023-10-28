import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddOpdsessionRequestModel } from 'src/app/Models/DTOs/add-opdsession-request.model';
import { Doctor } from 'src/app/Models/Entities/doctor.model';
import { SectionloginModel } from 'src/app/Models/Entities/sectionlogin.model';
import { OpdsessionService } from 'src/app/services/CRUD-Services/opdsession.service';
import { DataService } from 'src/app/services/Shared-Services/data.service';

@Component({
  selector: 'app-opdsession-add',
  templateUrl: './opdsession-add.component.html',
  styleUrls: ['./opdsession-add.component.css']
})
export class OPDSessionAddComponent implements OnInit{
  newOpdSession : AddOpdsessionRequestModel = {
    opdID: null,
    doctorID: null,
    startedAt: null,
    description: null,
    specialNotes: null
  }

  loggedInSection: SectionloginModel = {
    id: '',
    sectionID: '',
    rfid: null,
    sectionType: '',
    title: '',
    description: ''
  }

  verifiedDoctor : Doctor = {}

  constructor(
    private opdsessionService: OpdsessionService,
    private router: Router,
    private route : ActivatedRoute,
    private dataService : DataService
    ){}

  ngOnInit(): void {
    const loggedInSection = localStorage.getItem('Section');
    const verifiedDoctor = localStorage.getItem('Doctor');
    if(loggedInSection !== null)
    {
      this.loggedInSection = JSON.parse(loggedInSection);
      this.newOpdSession.opdID = this.loggedInSection.sectionID;
    }

    if(verifiedDoctor !== null){
      this.verifiedDoctor = JSON.parse(verifiedDoctor);
      this.newOpdSession.doctorID = this.verifiedDoctor.doctorID || null;
    }


  }

  addOpdSession(){
    this.newOpdSession.startedAt = new Date();
    this.newOpdSession.opdID = this.loggedInSection.sectionID;
    this.opdsessionService.addOPDSession(this.newOpdSession).subscribe(
      (addedOpdSession) => {
        this.dataService.updateOPDSEssionData(addedOpdSession); 
        this.router.navigate([addedOpdSession.id], { relativeTo: this.route.parent });

      },
      (error) => {
        console.error('Error adding opdsession:', error);
      }
    );
  }


}
