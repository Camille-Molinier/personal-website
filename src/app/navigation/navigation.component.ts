import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  toHome(): void {
    let element = document.getElementById("home");
    if(element != null) {
      element.scrollIntoView({behavior:"smooth"});
    }
  }

  toAbout(): void {
    let element = document.getElementById("about");
    if(element != null) {
      element.scrollIntoView({behavior:"smooth"});
    }
  }

  toProjects(): void {
    let element = document.getElementById("projects");
    if(element != null) {
      element.scrollIntoView({behavior:"smooth"});
    }
  }

  toContact(): void {
    let element = document.getElementById("contact");
    if(element != null) {
      element.scrollIntoView({behavior:"smooth"});
    }
  }
}
