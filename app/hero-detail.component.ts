import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
    moduleId:module.id,
    selector: 'my-hero-detail',
    templateUrl:'hero-detail.component.html',
    styleUrls:['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService : HeroService,
        private route : ActivatedRoute
    ){}
    @Input()
    hero:Hero;
    @Output() close = new EventEmitter();
    error:any;
    navigator = false;
    ngOnInit():void{
        this.route.params.forEach((params:Params) => {
            if(params['id'] !== undefined){
                let id = +params['id'];
                this.navigator = true;
                this.heroService.getHero(id).then(hero => this.hero = hero)
            }else{
                this.navigator = false;
                this.hero = new Hero();
            }
            
        })
    }
    goBack(saveHero:Hero = null):void{
        this.close.emit(saveHero);
        if(this.navigator){
            window.history.back();
        }
    }
    save():void{
        this.heroService.save(this.hero)
                        .then(hero => {
                            this.hero = hero;
                            this.goBack(hero)
                        })
                        .catch(error => this.error = error)
    }
}