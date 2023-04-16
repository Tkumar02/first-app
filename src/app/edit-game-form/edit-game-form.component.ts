import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { APIService, Game } from '../API.service';

@Component({
  selector: 'app-edit-game-form',
  templateUrl: './edit-game-form.component.html',
  styleUrls: ['./edit-game-form.component.css']
})
export class EditGameFormComponent implements OnInit {
  public editForm: FormGroup;
  public game!: Game;

  constructor(private api: APIService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      genre:['', Validators.required]
    });
  }

  async ngOnInit() {
    const gameId = this.route.snapshot.paramMap.get('gameId');
    if (gameId !== null) {
      this.api.GetGame(gameId).then((event)=> {
        this.game = event as Game;
        this.editForm.setValue({
          name: this.game.name,
          description: this.game.description,
          genre: this.game.genre
        })
      })
    }
  }

  public onUpdate() {
    const updatedGame = {
      id: this.game.id,
      name: this.editForm.value.name,
      description: this.editForm.value.description,
      genre: this.editForm.value.genre
    };
    this.api
    .UpdateGame(updatedGame)
      .then(()=>{
        console.log('game updated')
      })
      .catch((e)=>{
        console.log('error updating game...',e)
      });
  }
}
