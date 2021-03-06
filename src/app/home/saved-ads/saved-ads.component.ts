import { Component, OnInit } from '@angular/core';
import { FireBaseService } from 'src/app/services/fire-base.service';
import { COLLECTIONS } from '../app-constants';

@Component({
  selector: 'app-saved-ads',
  templateUrl: './saved-ads.component.html',
  styleUrls: ['./saved-ads.component.scss']
})
export class SavedAdsComponent implements OnInit {

  savedAds = []

  userId: any = '';

  adsLoading = false;

  constructor(
    private fireBaseService: FireBaseService
  ) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
    this.adsLoading = true;
    this.fireBaseService.fetchSavedAds(COLLECTIONS.ALL_ADS, this.userId).subscribe((val: any) => {
      this.adsLoading = false;
      this.savedAds = val;
    })
  }
  refreshList() {
    this.ngOnInit();
  }
}
