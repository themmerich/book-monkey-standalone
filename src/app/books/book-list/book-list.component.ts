import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookStoreService} from '../../shared/book-store.service';
import {Book} from '../../shared/book';
import {BookListItemComponent} from '../book-list-item/book-list-item.component';

@Component({
  selector: 'bm-book-list',
  standalone: true,
  imports: [CommonModule, BookListItemComponent],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books!: Book[];
  private bs = inject(BookStoreService);

  ngOnInit(): void {
    this.bs.getAll().subscribe(res => this.books = res);
  }
}
