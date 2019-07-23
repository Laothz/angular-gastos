import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-menu',
  templateUrl: './link-menu.component.html',
  styleUrls: ['./link-menu.component.scss']
})
export class LinkMenuComponent implements OnInit {

  @Input() route: String;
  @Input() icon: String;
  @Input() link: String;

  constructor() { }

  ngOnInit() {
  }

}
