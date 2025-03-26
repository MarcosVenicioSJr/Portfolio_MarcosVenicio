import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interfaces/knowledge.Interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: '../../../../../assets/icons/knowledge/angular_logo_icon_145496.svg',
      alt: 'Conhecimento em Angular'
    },
    {
      src: '../../../../../assets/icons/knowledge/c_sharp_icon_213045.svg',
      alt: 'Conhecimento em C-sharp'
    },
    {
      src: '../../../../../assets/icons/knowledge/typescript_logo_icon_144782.svg',
      alt: 'Conhecimento em TypeScript'
    },
    {
      src: '../../../../../assets/icons/knowledge/icons8-logo-java-coffee-cup.svg',
      alt: 'Conhecimento em Java'
    }
  ])
}
