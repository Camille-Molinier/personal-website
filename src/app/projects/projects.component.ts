import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  image_path: string; // Use image_path if that's the actual property name
  link: string;
  badges: string[]; // Assuming badges are represented as an array of strings
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
      image_path: 'assets/home.png',
      link: 'https://github.com/Golden-Sharks/SSLU/tree/main',
      badges: ['Python', 'Pygame']
    },{
      title: 'Sharkio',
      description: 'Distributed system for a multiplayer game',
      image_path: 'assets/home.png',
      link: '', //TODO: Add the link to the project
      badges: ['SpringBoot', 'Pygame', 'Docker', 'Virtual Machines']
    },{
      title: 'FairPipes',
      description: 'Data mutation pipelines for Machine Learning fairness',
      image_path: 'assets/home.png',
      link: 'https://github.com/Camille-Molinier/mutation-testing-ml-fairness',
      badges: ['Machine Learning', 'Python', 'Scikit-Learn']
    },{
      title: 'SSDU',
      description: 'Reinforcement learning framework for web games',
      image_path: 'assets/home.png',
      link: 'https://github.com/Golden-Sharks/SSDU',
      badges: ['Reinforcement Learning', 'Python', 'Gym', 'PyQT5']
    },{
      title: 'Untitled Shark Games',
      description: 'Mobile multiplayer game with Android Studio',
      image_path: 'assets/home.png',
      link: 'https://github.com/Golden-Sharks/UntitledSharkGames',
      badges: ['Java', 'Android', 'P2P']
    },{
      title: 'Tower defense',
      description: 'Tower defense game with Java and StdDraw',
      image_path: 'assets/home.png', // Assuming the image path is correct
      link: 'https://github.com/Camille-Molinier/Tower_defense',
      badges: ['Java', 'StdDraw']
    },{
      title: 'Python Ascii Art',
      description: 'Ascii art generator with Python',
      image_path: 'assets/home.png', // Assuming the image path is correct
      link: '', //TODO: Add the link to the project
      badges: ['Python', 'OpenCV']
    },
  ];
}

