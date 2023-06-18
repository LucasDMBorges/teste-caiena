import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css'],
})
export class CardPerfilComponent implements OnChanges {
  @Input() user!: User;

  ngOnChanges(): void {
    console.log(this.user);
  }

  redirectGithub(html: string) {
    window.open(html, '_blank');
  }
}
