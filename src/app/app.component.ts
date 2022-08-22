import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { UtilService } from './util.service';
import { menuController } from '@ionic/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public isMenuEnabled: boolean = true;
  public selectedIndex = 0;
  constructor(
    private platform: Platform,
    private util: UtilService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.selectedIndex = 1;
    
    this.util.getMenuState().subscribe(menuState => {
      this.isMenuEnabled = menuState;
    });
  }
}
