import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home/home-pages.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GitCardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [HomePagesComponent, SearchBoxComponent, GitCardListComponent],
  imports: [CommonModule],
  exports: [HomePagesComponent],
})
export class GiftModule {}
