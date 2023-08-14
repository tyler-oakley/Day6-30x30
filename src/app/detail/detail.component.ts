import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() selectedPlayer = new Player('', '', '', true);
  @Output() onSave = new EventEmitter();

  
}
