import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() roster: Player[] = [];
  @Output() onDelete = new EventEmitter();
  @Output() onSelect = new EventEmitter();
}
