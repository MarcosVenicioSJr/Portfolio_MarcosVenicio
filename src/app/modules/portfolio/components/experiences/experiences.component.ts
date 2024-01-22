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
        strong: 'Analista de Qualidade',
        p: 'Fitbank 450 | Jun 2023 - Dez 2022',
      },
      text: '<p>Trabalhei na área de qualidade de software por aproximadamente 1 ano. Onde tinha a função de garantir o funcionamento e eficiência dos softwares.</p><p>Principais atribuiçõs: Elaboração de casos de testes baseados em "User Story", Execução de casos de Teste, Testes de API REST, Teste Manual</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor Back-End',
        p: 'Fitbank 450 | Set 2023 - Momento',
      },
      text: '<p>Atualmente trabalho com desenvolvimento de software, realizando a criação de softwares e melhorias.</p><p>Principais Atribuições: Desenvolvimento de soluções (APIs e WorkerServices), Correção e manutenção de aplicações, Contribuição em soluções escaláveis e de alta performance, Criação de Teste Unitários.</p> ',
    },
  ]);
}
