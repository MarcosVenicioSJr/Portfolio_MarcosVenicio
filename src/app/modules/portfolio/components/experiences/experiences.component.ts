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
        strong: 'Desenvolvedor FullStack',
        p: 'Fitbank 450 | Fev 2022 - Momento',
      },
      text: '<p> Sou desenvolvedor de software com 3 anos de experiência, especializado em .NET, Angular, React, Spring Boot e Java. Atualmente, atuo no desenvolvimento de sistemas bancários, criando soluções robustas e seguras para serviços como Pix e boletos, garantindo alta disponibilidade, escalabilidade e desempenho exigidos pelo setor. <br><br> Tenho experiência em liderança de equipes, contribuindo ativamente para planejamento, execução e entrega de projetos, além de fomentar a colaboração e adoção de metodologias ágeis como Scrum. <br><br> Minha expertise inclui arquitetura de microservices, CQRS, MVC e mensageria com RabbitMQ, permitindo a construção de sistemas distribuídos e escaláveis. Além disso, possuo experiência com containerização utilizando Docker e versionamento de código seguindo as melhores práticas de desenvolvimento. <br><br> Também atuo com monitoramento e observabilidade, utilizando ElasticSearch e Kibana para análise de logs e métricas, garantindo performance e confiabilidade das aplicações. <br><br> Com experiência em soluções em nuvem e foco em qualidade e inovação, busco sempre entregar valor através de tecnologias modernas e eficientes.</p> ',
    },
  ]);
}
