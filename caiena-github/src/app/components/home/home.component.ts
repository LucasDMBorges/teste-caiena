import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private users: UsersService) {}

  getUsers() {
    const nome = this.form.controls.nome.value;
    this.users.getUsersByLogin(nome).subscribe((res) => {
      this.user = res as User;
      this.hasUser = true;
    });
  }

  redirect() {
    console.log('chamou');
  }
}
