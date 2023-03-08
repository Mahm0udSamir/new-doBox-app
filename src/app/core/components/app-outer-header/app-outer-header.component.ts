import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-outer-header',
  templateUrl: './app-outer-header.component.html',
  styleUrls: ['./app-outer-header.component.scss'],
})
export class AppOuterHeaderComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'hub',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/images/hub.svg'
      )
    );
  }

  ngOnInit(): void {}
}
