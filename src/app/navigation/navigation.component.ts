import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  protected isScrolled: boolean = false;

  ngOnInit() {

    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 0;
    });
  }

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

  toPublications(): void {
    let element = document.getElementById("publications");
    if(element != null) {
      element.scrollIntoView({behavior:"smooth"});
    }
  }
}
