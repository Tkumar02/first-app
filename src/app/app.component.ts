import { Component, OnInit, OnDestroy } from '@angular/core';
import { ZenObservable } from 'zen-observable-ts'
import { APIService, Game } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'first-app';
  private subscription: ZenObservable.Subscription | null=null;
  public games: Array<Game> = []
  constructor(private api:APIService){

  }

  async ngOnInit() {
    this.api.ListGames().then(event => {
      this.games = event.items as Game[];
    });

    this.subscription = this.api.OnCreateGameListener().subscribe(
      (event: any) => {
        const newGame = event.value.data.onCreateGame;
        this.games = [newGame, ...this.games]
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }
}
