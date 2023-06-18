import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  @ViewChild(MatPaginator)paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['login', 'type', 'avatar_url', 'html_url'];

  dataSource!: MatTableDataSource<any>;

  constructor(private user: UsersService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.user.getUsers().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
          this.openSnackBar(error.error.message, 'ok');
      }
    );
  }

  redirectGithub(html: string) {
    window.open(html, '_blank');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
