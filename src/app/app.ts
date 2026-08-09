import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MouseGlowDirective } from './core/directives/mouse-glow.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MouseGlowDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
