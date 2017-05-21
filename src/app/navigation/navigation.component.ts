import { Component, OnInit } from '@angular/core';

const SECTION_HEADING_ARRAY: Array<string> = [
  'Projects',
  'Languages',
  'Frameworks',
  'About'
];

@Component({
  selector: 'cc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public sectionHeadingArray: Array<string>;

  public constructor() {
    this.sectionHeadingArray = SECTION_HEADING_ARRAY;
  }

  public ngOnInit(): void {
  }

}
