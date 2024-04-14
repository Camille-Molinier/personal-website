import {Component, Input} from '@angular/core';
import {Publication} from "../publications/publications.component";

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.css']
})
export class PublicationCardComponent {
  @Input() publication!: Publication;

  openPublication(url: string) {
    window.open(url, '_blank');
  }
}
