import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.Interfaces';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPainelClass } from '../../enums/EDialogPainelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
#dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: "../../../../../assets/img/projects/bank.png",
      alt: "Imagem de um banco",
      title: "Bank_Account_Management",
      width: "100px",
      height: "51px",
      description: "Este projeto possui o objetivo de simular as ações básicas de um banco. Neste projeto foi utilizado: MySql, C#, Dapper, Jwt. Arquitetura: Microservices",
      links: [{
        name: "Bank_Account_Management",
        href: "https://github.com/MarcosVenicioSJr/Bank_Account_Management/tree/master"
      }]
    },
    {
      src: "../../../../../assets/img/projects/supermarket.png",
      alt: "Imagem de um supermercado",
      title: "Supermarket",
      width: "100px",
      height: "51px",
      description: "Este projeto tem o objetivo de simular as ações de um supermercado. Onde é possivel realizar a contratação de funcionários e a adição de produtos. Ferramentas Usadas: SqlServer, C#, Entity.Framework.Core.",
      links: [{
        name: "Supermarket",
        href: "https://github.com/MarcosVenicioSJr/Supermarket/tree/master"
      }]
    },
    {
      src: "../../../../../assets/img/projects/test.png",
      alt: "Imagem de uma lista de Teste",
      title: "Cypress",
      width: "100px",
      height: "51px",
      description: "Este projeto tem como objetivo realizar o teste do site Herokuapp(site próprio para realizar testes).",
      links: [{
        name: "Cypress",
        href: "https://github.com/MarcosVenicioSJr/Cypress_herokuapp"
      }]
    }
  ])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPainelClass.PROJECTS
    })
  }
}
