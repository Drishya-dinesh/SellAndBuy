import { Component, OnInit } from '@angular/core';
import { FireBaseService } from 'src/app/services/fire-base.service';
import { COLLECTIONS } from '../app-constants';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  allAds = [];

  adsLoading = false;

  searchText = '';

  constructor(
    private fireBaseService: FireBaseService,
  ) { }

  ngOnInit(): void {
    this.adsLoading = true;
    this.fireBaseService.fetchAllAds(COLLECTIONS.ALL_ADS).subscribe((val: any) => {
      this.adsLoading = false;
      this.allAds = val;
    })
  }

  refreshAds() {
    this.ngOnInit()
  }

}
