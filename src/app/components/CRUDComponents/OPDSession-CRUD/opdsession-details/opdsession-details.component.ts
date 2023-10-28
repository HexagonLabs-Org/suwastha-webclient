import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OpdsessionModel } from 'src/app/Models/Entities/opdsession.model';
import { OpdsessionService } from 'src/app/services/CRUD-Services/opdsession.service';

@Component({
  selector: 'app-opdsession-details',
  templateUrl: './opdsession-details.component.html',
  styleUrls: ['./opdsession-details.component.css']
})
export class OPDSessionDetailsComponent implements OnInit{
  opdSession : OpdsessionModel = {};
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private opdSessionService :OpdsessionService
    ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null)
    this.opdSessionService.getOPDSessionById(id).subscribe(
      (opdSession) => {
        this.opdSession = opdSession;
      },
      (error) => {
        console.error('Error fetching opdSession details:', error);
      }
    );
  }

  goToPrescriptionWriter(){
    this.router.navigate(['Prescription-Writer'], { relativeTo: this.route });
  }
}
