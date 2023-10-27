import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-opdsession-details',
  templateUrl: './opdsession-details.component.html',
  styleUrls: ['./opdsession-details.component.css']
})
export class OPDSessionDetailsComponent {

  constructor(
    private router:Router,
    private route:ActivatedRoute
    ){}

  goToPrescriptionWriter(){
    this.router.navigate(['Prescription-Writer'], { relativeTo: this.route });
  }
}
