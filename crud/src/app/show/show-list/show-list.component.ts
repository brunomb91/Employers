import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  dataSource  = [];
  constructor(private route: ActivatedRoute, ) { }

  ngOnInit() {

  }

  }
