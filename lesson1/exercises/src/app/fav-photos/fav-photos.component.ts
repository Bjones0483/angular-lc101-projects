import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Jheronimus_Bosch_%28cropped%29.jpg/659px-Jheronimus_Bosch_%28cropped%29.jpg';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg/1280px-The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg';
  image4 = 'https://i.giphy.com/media/zgduo4kWRRDVK/giphy.webp'


  constructor() { }

  ngOnInit() {
  }

}