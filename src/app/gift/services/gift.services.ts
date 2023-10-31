import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, ISearchResponse } from 'src/app/shared/interfaces/gift.interface';

@Injectable({ providedIn: 'root' })
export class GiftService {
  private _tagHistory: string[] = [];
  public gifList: Gif[] = [];

  private api_key = 'hDdugJZHABvFzwHiTunOn2gVW2fk45Aa';
  private urlGift = 'https://api.giphy.com/v1/gifs/';

  get tagHistory() {
    return [...this._tagHistory];
  }

  constructor(private httpClient: HttpClient) {
    const historyTag = localStorage.getItem('history');
    if (historyTag?.length === 0) return;
    if (historyTag && historyTag?.length > 0) {
      const historyTagParsing = JSON.parse(historyTag);
      this._tagHistory = historyTagParsing;
      this.addTagHistory(historyTagParsing[0]);
    }
  }

  private organizeTag(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.slice(0, 10);
    this.addLocalStorage(this._tagHistory);
  }

  addLocalStorage(tagHistory: string[]): void {
    localStorage.setItem('history', JSON.stringify(tagHistory));
  }

  addTagHistory(tag: string): void {
    if (tag.length === 0) return;
    this.organizeTag(tag);

    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('limit', '10')
      .set('q', tag);

    this.httpClient
      .get<ISearchResponse>(`${this.urlGift}search`, { params })
      .subscribe(({ data }) => {
        this.gifList = data;
      });
  }
}
