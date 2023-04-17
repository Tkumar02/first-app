import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { EditgamesComponent } from './editgames/editgames.component';
import { EditGameFormComponent } from './edit-game-form/edit-game-form.component';
import { AddGameComponent } from './add-game/add-game.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full'},
  { path: 'games', component: GamesComponent, pathMatch: 'full'},
  { path: 'editgames', component: EditgamesComponent},
  { path: 'edit-game-form/:gameId', component: EditGameFormComponent},
  { path: 'add-game', component: AddGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
