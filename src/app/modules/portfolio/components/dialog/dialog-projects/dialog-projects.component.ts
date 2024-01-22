import { Component, Inject, OnInit, signal } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IProjects } from '../../../interfaces/IProjects.Interfaces';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
  ) {}

  public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal() {
    return this._dialogRef.close();
  }
}