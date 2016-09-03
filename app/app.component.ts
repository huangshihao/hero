import { Component, OnInit } from '@angular/core';
import './rxjs-extension';


@Component({
    moduleId:module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLinkActive="active" routerLink="/dashboard">Dashboard</a>
            <a routerLinkActive="active" routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls:['app.component.css']
})
export class AppComponent {
    constructor() { }
    title = 'Tour of Heroes';

    ngOnInit() { }
}