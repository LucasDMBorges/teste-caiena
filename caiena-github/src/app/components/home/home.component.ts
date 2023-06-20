import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public user!: User;

  public form = this.fb.group({
    nome: [''],
  });

  public hasUser: boolean = false;

  public hasSearch: boolean = false;

  public durationInSeconds = 5;

  constructor(
    private fb: FormBuilder,
    private users: UsersService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  getUsers() {
    const nome = this.form.controls.nome.value;
    this.hasUser = false;
    this.hasSearch = true;
    this.users.getUsersByLogin(nome).subscribe(
      (res) => {
        this.user = res as User;
        setTimeout(() => {
          this.hasSearch = false;
          this.hasUser = true;
        }, 1000);
      },
      (error) => {
        setTimeout(() => {
          this.hasSearch = false;
          this.openSnackBar(error.error.message, 'ok');
        }, 1000);
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  goToTable() {
    this.router.navigate(['/table']);
  }
}
