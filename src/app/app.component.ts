import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import {OnInit} from "@angular/core";
import {initFlowbite} from "flowbite";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api.service";
import {isPlatformBrowser} from "@angular/common";
import {Inject, PLATFORM_ID} from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,HttpClientModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  title = 'MVPSports';

  camisas: any[] = [];

  constructor(private apiService: ApiService, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit():void {

    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
    this.apiService.getCamisas().subscribe(data => {
      this.camisas = data;
    })
  }
}
