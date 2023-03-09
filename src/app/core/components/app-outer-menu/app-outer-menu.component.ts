import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outer-menu',
  templateUrl: './app-outer-menu.component.html',
  styleUrls: ['./app-outer-menu.component.scss'],
})
export class AppOuterMenuComponent implements OnInit {
  list_menu = [
    {
      label: 'Chat',
      icon: 'chat',
      link: 'chat',
    },
    {
      label: 'Inbox',
      icon: 'inbox',
      link: 'inbox',
    },
    {
      label: 'HUB Road Map',
      icon: 'home',
      link: 'hub',
    },
    {
      label: 'Dobox',
      icon: 'monitoring',
      link: 'dobox',
    },
    {
      label: 'Profile',
      icon: 'person',
      link: 'profile',
    },
    {
      label: 'Meeting',
      icon: 'groups',
      link: 'meeting',
    },
  ];

  ngOnInit(): void {}
}
