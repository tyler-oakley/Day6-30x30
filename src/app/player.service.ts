import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor() { }

  getPlayers(): Player[] {
    return PLAYERS;
  }
  
}
