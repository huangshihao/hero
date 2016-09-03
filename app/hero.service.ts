import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise'

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';
    private headers = new Headers({
        'Content-Type':'application/json'
    })
    constructor(private http:Http){

    }
    handlerError(error:any){
        console.log('一个错误',error);
        return Promise.reject( error.massage || error );
    }
    getHeroes():Promise<Hero[]>{
        return this.http.get(this.heroesUrl)
                .toPromise()
                .then(respones=>respones.json().data as Hero[])
                .catch(this.handlerError)
    }
    getHeroesSlowly():Promise<Hero[]>{
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES),2000)
        )
    }
    getHero(id:number){
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
    save(hero:Hero): Promise<Hero>{
        if(hero.id){
            return this.update(hero)
        }
        return this.post(hero);
    }
    private post(hero: Hero): Promise<Hero>{
        return this.http.post(this.heroesUrl,JSON.stringify(hero),{headers:this.headers})
                .toPromise()
                .then(res => res.json().data)
                .catch(this.handlerError);
    }
    private update(hero: Hero): Promise<Hero>{
        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http.put(url,JSON.stringify(hero),{headers:this.headers})
                .toPromise()
                .then(() => hero)
                .catch(this.handlerError);
    }
    delete(hero: Hero): Promise<Hero>{
        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http.delete(url,{headers:this.headers})
                .toPromise()
                .then()
                .catch(this.handlerError);
    }
    
}