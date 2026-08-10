import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollService } from './core/services/scroll.service';
import { RetroBgComponent } from './core/components/retro-bg/retro-bg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RetroBgComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly scroll = inject(ScrollService);
  readonly progress = this.scroll.progress;
}
