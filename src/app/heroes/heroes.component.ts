import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  // private heroService: HeroService;

  // this.heroService = new HeroService();
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroesRecibidos => this.heroes = heroesRecibidos);

    // this.heroService.getHeroes().subscribe(this.recepcionHeroes.bind(this));
  }

  // recepcionHeroes(heroesRecibidos: Hero[]) {
  //   console.log('this vale',this);
  //   this.heroes = heroesRecibidos;
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
<<<<<<< HEAD
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);

    this.heroService.deleteHero(hero.id).subscribe();

    //this.heroService.deleteHero(hero.id).subscribe(
      //()=> this.heroes = this.heroes.filter(h => h !== hero));
=======

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe(
      () => this.heroes = this.heroes.filter(h => h !== hero)
    );
>>>>>>> f012094b71e2098dd295013387f94303ad458937
  }
}
