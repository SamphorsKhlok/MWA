import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   // selectedUser = this.users[0];
  isDarkTheme = false;

  menulists: any = [
    {
      name: 'Dashboard',
      link : '/dashboard'
    },
    {
      name: 'Buttons',
      link : '/buttons'
    },
    {
      name: 'Floating Action Button',
      link : '/floating-action-button'
    },
    {
      name: 'Cards',
      link : '/cards'
    },
    {
      name: 'Chips',
      link : '/chips'
    },
    {
      name: 'Data tables',
      link : '/data-tables'
    },
    {
      name: 'Dialogs',
      link : '/dialogs'
    },
    {
      name: 'Dividers',
      link : '/dividers'
    },
    {
      name: 'Expansion panels',
      link : '/expansion-panels'
    },
    {
      name: 'Grid lists',
      link : '/grid-lists'
    },
    {
      name: 'Tables',
      link : '/tables'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {

  }

  selectedMenuItem(a) {
    // alert(a.link);
    this.router.navigateByUrl(a.link);
  }

}
