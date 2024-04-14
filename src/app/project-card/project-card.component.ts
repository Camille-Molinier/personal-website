import {Component, Input} from '@angular/core';
import {Project} from "../projects/projects.component";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project!: Project;

  openDetails(url: string) {
    window.open(url, '_blank');
  }
}
