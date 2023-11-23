import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router){

  }

  ngOnInit(): void {
    
  }

  goToRoom = () => {
    this.router.navigate(['/', uuid()]);

  }

}
