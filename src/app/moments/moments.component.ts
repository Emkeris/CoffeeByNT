import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.scss']
})
export class MomentsComponent implements OnInit {
  cards = [
    {socTitle : 'Instagram', socText : 'share your moments'},
    {socTitle : 'facebook', socText : 'publish yours'},
    {socTitle : 'twiter', socText : 'tweet yours'}
  ];

  images = [
    'https://images.freeimages.com/images/large-previews/694/volders-party-05-1545434.jpg',
    'https://images.freeimages.com/images/large-previews/e84/dinner-party-scenes-3-1459510.jpg',
    'https://images.freeimages.com/images/large-previews/e1e/sydney-beach-scene-1517555.jpg',
    'https://images.freeimages.com/images/large-previews/964/friends-1308891.jpg',
    'https://images.freeimages.com/images/large-previews/0e6/campsite-1-1058369.jpg',
    'https://images.freeimages.com/images/large-previews/a19/kite-surfing-1576083.jpg',
    'https://images.freeimages.com/images/large-previews/3f3/lonely-friends-1311701.jpg',
    'https://cdn.pixabay.com/photo/2014/05/03/00/42/van-336606_960_720.jpg',
    'https://images.freeimages.com/images/large-previews/77a/young-couple-drinking-coffee-1569632.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
