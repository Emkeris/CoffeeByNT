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
    'https://cdn.pixabay.com/photo/2017/01/14/15/11/relaxing-1979674_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/02/19/10/21/mug-1209194_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/03/27/13/59/adult-2178904_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/09/02/13/26/glasses-919071_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/07/10/17/53/cheers-839865_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/10/12/15/05/girls-984154_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/10/12/14/57/campfire-984020_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/05/03/00/42/van-336606_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/22/19/15/audience-1850119_960_720.jpg'


  ];

  constructor() { }

  ngOnInit() {
  }

}
