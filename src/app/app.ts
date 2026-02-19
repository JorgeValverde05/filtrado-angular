import { Component } from '@angular/core';
import { DestinosComponent } from './components/destinos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DestinosComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
