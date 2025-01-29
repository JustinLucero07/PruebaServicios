import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidatosComponent } from './components/candidatos/candidatos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CandidatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PruebaServicios';
}
