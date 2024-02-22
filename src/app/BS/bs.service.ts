import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BR } from '../extra/BR.interface';
import { iOne, iTwo } from '../extra/utl.interface';

@Injectable({
  providedIn: 'root'
})
export class BSService 
{
  private ss = new BehaviorSubject<string>("");

  private bookBS = new BehaviorSubject<BR[]>([]);

  private bookURL = "https://www.googleapis.com/books/v1/volumes?q=";

  constructor(private http: HttpClient) 
  {
    this.ss.pipe(switchMap(ss => 
    {
      if (ss !== "") 
      {
        return this.getBooks(ss);
      } 
      else 
      {
        return new Observable<BR[]>();
      }
    })).subscribe((books: BR[]) => 
    {
      this.bookBS.next(books);
    })
  }

  startLooking(ss: string) 
  {
    this.ss.next(ss);
  }

  getBooksTwo() 
  {
    return this.bookBS.asObservable();
  }

  private getBooks(ss: string) 
  {
    const url = this.bookURL + encodeURIComponent(ss);

    return this.http.get<iOne>(url).pipe(switchMap(({ totalItems, items }: iOne) => 
    {
      if (totalItems === 0) return of([]);

      const books = items.map(({ volumeInfo }: iTwo) => 
      {
        const newBook: BR = 
        {
          title: volumeInfo.title,
          author: volumeInfo.authors?.join(", "),
          publisher: volumeInfo.publisher,
          publishdate: volumeInfo.publishedDate,
          description: volumeInfo.description,
          imglink: volumeInfo.imageLinks?.smallThumbnail
        }
          return newBook;
        });
        return of(books);
      })
    );
  }
}
