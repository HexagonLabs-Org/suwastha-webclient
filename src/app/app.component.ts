import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'suwastha-webclient';

  constructor(private router : Router){}
  ngOnInit(): void {
    if(localStorage.getItem("JWT") === null){
      this.router.navigate(['/']);
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  onTabClose(event: BeforeUnloadEvent): void {
    //localStorage.clear();
  }
}
