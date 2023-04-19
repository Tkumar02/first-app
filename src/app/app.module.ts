import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { EditgamesComponent } from './editgames/editgames.component';
import { EditGameFormComponent } from './edit-game-form/edit-game-form.component';
import { AddGameComponent } from './add-game/add-game.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';

@NgModule({
  declarations: [
    AppComponent, GamesComponent, EditgamesComponent, EditGameFormComponent, AddGameComponent, NavHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
