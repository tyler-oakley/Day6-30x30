import { Component } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  roster: Player[] = [];
  selectedPlayer = new Player('', '', '', true);

  constructor (public playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.roster = this.playerService.getPlayers();
  }

  save() {

    let alreadyExists = false;

    for (let player of this.roster){
      if (player.name == this.selectedPlayer.name) {
        alreadyExists = true;
      }
    }

    if (alreadyExists) {
      alert("Info for " + this.selectedPlayer.name + " saved.");
    }
    else if (this.selectedPlayer.name){
      this.roster.push(this.selectedPlayer);
    }
    else {
      alert("All info fields must be filled out to add player to roster.")
    }
    this.clear();
  }

  deletePlayer(playerToDelete: Player) {
    const players = [...this.roster];
    this.roster = players.filter(player => player.name !== playerToDelete.name);
    this.clear();
  }

  selectPlayer(player: Player) {
    this.selectedPlayer = player;
  }

  clear() {
    this.selectedPlayer = new Player('', '', '', true);
  }
}
