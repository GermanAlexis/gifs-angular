import { Component } from '@angular/core';
import { GiftService } from '../../services/gift.services';
import { Gif } from 'src/app/shared/interfaces/gift.interface';

@Component({
  selector: 'home-page',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss'],
})
export class HomePagesComponent {
  constructor(private gifService: GiftService) {}

  get gifts(): Gif[] {
    return this.gifService.gifList;
  }
}
