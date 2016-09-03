import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Hero } from './hero';
import { HeroService } from './hero.service';

import { HEROES } from './mock-heroes';

@Component({
    moduleId:module.id,
    selector: 'my-heroes',
    styleUrls:['heroes.component.css'],
    providers:[],
    templateUrl:'heroes.component.html'
})
export class HeroesComponent { 
    constructor(private heroService:HeroService,
                private router:Router){

    }
    heroes : Hero[];
    selectHero:Hero;
    getHeroes(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    onSelect(hero:Hero):void{
        this.selectHero = hero;
    }
    ngOnInit():void{
        this.getHeroes();
    }
    gotoDetail(id:number){
      let link = ['./detail',id];
      this.router.navigate(link);
    }
}

