import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { APIService, Game } from '../API.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  public createForm: FormGroup;
  public games: Array<Game> = [];

  constructor(private api:APIService, private fb: FormBuilder, private router: Router){
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['',Validators.required],
      genre:['',Validators.required]
    });
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
