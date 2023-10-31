import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftService } from '../../services/gift.services';

@Component({
  selector: 'search-box',
  template: `
    <h5>Search</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Search"
      (keyup.enter)="searchTag()"
      #txtInputTag
    />
  `,
})
export class SearchBoxComponent {
  constructor(private giftService: GiftService) {}

  @ViewChild('txtInputTag')
  inputTag!: ElementRef<HTMLInputElement>;

  searchTag() {
    const newTag = this.inputTag.nativeElement.value;

    this.giftService.addTagHistory(newTag);

    this.inputTag.nativeElement.value = '';
  }
}
