import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
export class DirectoryPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  part1() {
    this.route.navigate(["/part1"]);
  }

  part2() {
    this.route.navigate(["/part2"]);
  }

  part3() {
    this.route.navigate(["/part3"]);
  }

  part4() {
    this.route.navigate(["/part4"]);
  }

  part5() {
    this.route.navigate(["/part5"]);
  }

  part6() {
    this.route.navigate(["/part6"]);
  }

  part7() {
    this.route.navigate(["/part7"]);
  }

  part8() {
    this.route.navigate(["/part8"]);
  }

  part9() {
    this.route.navigate(["/part9"]);
  }

  part10() {
    this.route.navigate(["/part10"]);
  }

  part11() {
    this.route.navigate(["/part11"]);
  }

  part12() {
    this.route.navigate(["/part12"]);
  }

  part13() {
    this.route.navigate(["/part13"]);
  }

}
