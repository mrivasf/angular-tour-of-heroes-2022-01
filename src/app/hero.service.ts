<<<<<<< HEAD
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
>>>>>>> f012094b71e2098dd295013387f94303ad458937
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
<<<<<<< HEAD
import { catchError, map, tap } from 'rxjs/operators';
=======
>>>>>>> f012094b71e2098dd295013387f94303ad458937

@Injectable({
  providedIn: 'root'
})
export class HeroService {
<<<<<<< HEAD

  private heroesUrl = 'api/heroes/';  // URL to web api
  
=======
  private heroesUrl = 'api/heroes/';  // URL to web api

>>>>>>> f012094b71e2098dd295013387f94303ad458937
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

<<<<<<< HEAD
  constructor(private http: HttpClient, private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
=======
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
>>>>>>> f012094b71e2098dd295013387f94303ad458937
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  getHero(id: number): Observable<Hero> {
<<<<<<< HEAD
    this.log(`fetched hero id=${id}`);
    return this.http.get<Hero>(this.heroesUrl+id).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
=======
    return this.http.get<Hero>(this.heroesUrl + id).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  updateHero(hero?: Hero): Observable<any> {
    return this.http.put<Hero>(this.heroesUrl + hero?.id, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero?.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    return this.http.delete<Hero>(this.heroesUrl + id).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
>>>>>>> f012094b71e2098dd295013387f94303ad458937
  }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}

/** PUT: update the hero on the server */
updateHero(hero: Hero): Observable<any> {
  return this.http.put(this.heroesUrl+hero.id, hero, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}

/** POST: add a new hero to the server */
addHero(hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
    tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
  );
}

/** DELETE: delete the hero from the server */
deleteHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;

  return this.http.delete<Hero>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}
}
