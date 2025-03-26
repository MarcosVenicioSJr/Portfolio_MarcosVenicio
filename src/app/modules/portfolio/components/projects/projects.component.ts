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
      src: "../../../../../assets/img/projects/github.png",
      alt: "Logo do github",
      title: "Github",
      width: "100px",
      height: "100px",
      description: "Neste link encontra-se minha página do Github. Onde possui todos os projetos criados.",
      links: [{
        name: "Página Github",
        href: "https://github.com/MarcosVenicioSJr"
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
