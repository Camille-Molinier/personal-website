import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  image_path: string;
  link: string;
  badges: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'SSLU',
      description: '2D game with pygame realised in 40h during GameJam ESIR',
      image_path: 'assets/images/SSLU.gif',
      link: 'https://github.com/Golden-Sharks/SSLU/tree/main',
      badges: ['Python', 'Pygame']
    },{
      title: 'Sharkio',
      description: 'Distributed system for a multiplayer game',
      image_path: 'assets/images/sharkio.gif',
      link: 'https://github.com/Sharkio-SR',
      badges: ['SpringBoot', 'Pygame', 'Docker', 'Virtual Machines']
    },{
      title: 'FairPipes',
      description: 'Data mutation pipelines for Machine Learning fairness',
      image_path: 'assets/images/fairpipes.png',
      link: 'https://github.com/Camille-Molinier/mutation-testing-ml-fairness',
      badges: ['Machine Learning', 'Python', 'Scikit-Learn']
    },{
      title: 'SSDU',
      description: 'Reinforcement learning framework for web games',
      image_path: 'assets/images/ssdu.gif',
      link: 'https://github.com/Golden-Sharks/SSDU',
      badges: ['Reinforcement Learning', 'Python', 'Gym', 'PyQT5']
    },{
      title: 'Untitled Shark Games',
      description: 'Mobile multiplayer game with Android Studio',
      image_path: 'assets/images/USG.gif',
      link: 'https://github.com/Golden-Sharks/UntitledSharkGames',
      badges: ['Java', 'Android', 'P2P']
    },{
      title: 'Tower defense',
      description: 'Tower defense game with Java and StdDraw',
      image_path: 'assets/images/td.gif',
      link: 'https://github.com/Camille-Molinier/Tower_defense',
      badges: ['Java', 'StdDraw']
    },{
      title: 'Python Ascii Art',
      description: 'Ascii art generator with Python and PIL',
      image_path: 'assets/images/ascii.jpg',
      link: 'https://github.com/Camille-Molinier/acscii-art-generator',
      badges: ['Python', 'Pillow']
    },
  ];
}

