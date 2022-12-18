import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.page.html',
  styleUrls: ['./subpage.page.scss'],
})
export class SubpagePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  info() {
    this.route.navigate(["/info"]);
  }
}
