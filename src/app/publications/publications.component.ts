import { Component } from '@angular/core';

export interface Publication {
  title: string;
  conference: string;
  description: string;
  date: string;
  link: string;
  badges: string[];
}

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
  publications: Publication[] = [
    {
      title: 'FairPipes: Mutation Testing for Machine Learning Fairness',
      conference: "AST'24",
      description: '\n' +
        'AI models are all around us, making important decisions.  The problem? They can be biased, discriminating against people. We built FairPipes to see how sensitive these models are to changes in fairness data, after they\'re already deployed.  Our tests showed some models are super sensitive, while others are less so. This helps us create fairer AI!',
      date: 'Feb. 2024',
      link: 'https://hal.science/hal-04440201',
      badges: ['Machine Learning', 'Mutation Testing', 'Fairness']
    },
  ]
}
