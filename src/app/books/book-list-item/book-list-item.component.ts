import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Book} from '../../shared/book';

@Component({
  selector: 'bm-book-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent {
  @Input() book?: Book;
}
