import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroe/';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      catchError( (err,caught) => {
        console.error(err, caught);
        this.log("Error al acceder a los heroes");
        return of([ { id: 0, name: 'No se ha podido acceder a los heroes'} ]);
      } )
    );
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetched hero id=${id}`);
    return this.http.get<Hero>(this.heroesUrl + id);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
