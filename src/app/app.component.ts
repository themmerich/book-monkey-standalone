import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {StyleClassModule} from 'primeng/styleclass';

@Component({
  selector: 'bm-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StyleClassModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-monkey-standalone';
}
