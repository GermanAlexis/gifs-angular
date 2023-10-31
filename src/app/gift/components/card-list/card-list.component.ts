import { Component, Input } from '@angular/core';
import { Gif } from 'src/app/shared/interfaces/gift.interface';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class GitCardListComponent {
  @Input()
  public gifts: Gif[] = [];
}
