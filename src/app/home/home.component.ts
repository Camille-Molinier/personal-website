import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  openLinkedIn() {
    const linkedinUrl = 'https://www.linkedin.com/in/camille-molinier/';
    window.open(linkedinUrl, '_blank');
  }

  openGitHub() {
    const githubUrl = 'https://github.com/Camille-Molinier';
    window.open(githubUrl, '_blank');
  }

  openKaggle() {
    const kaggleUrl = 'https://www.kaggle.com/camillemolinier';
    window.open(kaggleUrl, '_blank');
  }
}
