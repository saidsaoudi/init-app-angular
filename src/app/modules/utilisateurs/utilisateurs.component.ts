import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AuthService } from './../../core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'app/shared/components/modal/modal.component';
import { IDynamicDialogConfig } from 'app/shared/components/modal/modal.component';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss'],
})
export class UtilisateursComponent implements OnInit {
  @ViewChild('yesNoDialogTemplate') yesNoTemplate: TemplateRef<any> | undefined;

  constructor(public authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('Utilisateur component', this.authService.userValue);
  }
  openYesNoDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '819px',
      data: <IDynamicDialogConfig>{
        title: 'Really?',
        dialogContent: this.yesNoTemplate,
        acceptButtonTitle: 'De!',
        declineButtonTitle: 'No stop!',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      // delete it
    });
  }
}
