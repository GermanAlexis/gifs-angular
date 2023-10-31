import { Component } from '@angular/core';
import { GiftService } from 'src/app/gift/services/gift.services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private giftService: GiftService) {}

  getItem(tag: string) {
    this.giftService.addTagHistory(tag);
  }

  get tags() {
    return this.giftService.tagHistory;
  }
}
