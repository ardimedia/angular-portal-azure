import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ospa-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'] // build error: Unknown version 67 of android
})
export class PageNotFoundComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
