import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'quizy-app',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/main.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AuthService]
})
export class AppComponent {
  constructor(private auth: AuthService) {
  }
}
