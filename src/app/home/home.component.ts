import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';
import {Name} from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
myname: Name={
  name:'name'
}
  constructor(private homeService:HomeServiceService) { }

  ngOnInit(): void {
  }

}
