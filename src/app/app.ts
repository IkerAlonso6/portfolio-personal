import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MouseGlowDirective } from './core/directives/mouse-glow.directive';
import { ScrollService } from './core/services/scroll.service';
import { NeuralBgComponent } from './core/components/neural-bg/neural-bg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MouseGlowDirective, NeuralBgComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly scroll = inject(ScrollService);
  readonly progress = this.scroll.progress;
}
