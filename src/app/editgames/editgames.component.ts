import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamoDB } from 'aws-sdk';
import { APIService, Game } from '../API.service';
@Component({
  selector: 'app-editgames',
  templateUrl: './editgames.component.html',
  styleUrls: ['./editgames.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class EditgamesComponent implements OnInit {
  gameId: any;
  game: any;
  dynamodb: any;
  public games: Array <Game> = []

  constructor(private router: Router, private api: APIService) { 
   }

  async ngOnInit() {
    this.api.ListGames().then((event)=>{
      this.games = event.items as Game[];
    })
  }
}
