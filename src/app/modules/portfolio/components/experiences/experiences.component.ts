import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal([
    {
      summary: {
        strong: 'Desenvolvedor Back-End',
        p: 'Fitbank 450 | Jun 2023 - Momento',
      },
      text: '<p>Atualmente trabalho com desenvolvimento de software, realizando a criação de softwares e melhorias.</p><p>Principais Atribuições: Desenvolvimento de soluções (APIs e WorkerServices), Correção e manutenção de aplicações, Contribuição em soluções escaláveis e de alta performance, Criação de Teste Unitários.</p> ',
    },
  ]);
}
