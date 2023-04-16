import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { APIService, Game } from '../API.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  public createForm: FormGroup;
  public games: Array<Game> = [];

  constructor(private api:APIService, private fb: FormBuilder){
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['',Validators.required],
      genre:['',Validators.required]
    });
  }

  async ngOnInit() {
    this.api.ListGames().then((event)=> {
      this.games = event.items as Game[];
    })
  }

  public onCreate(game: Game) {
    this.api
      .CreateGame(game)
      .then(()=>{
        console.log('game created!')
        this.createForm.reset();
      })
      .catch((e)=>{
        console.log('error creating game...',e)
      });
  }
}
