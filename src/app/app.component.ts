import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      content: 'Saw this awesome tree during my hike today',
      imageUrl: 'assets/images/tree.jpg',
    },
    {
      title: 'Beautiful Mountain',
      username: 'wonderer',
      content: 'Here is a picture of a beautiful mountain',
      imageUrl: 'assets/images/mountain.jpg',
    },
    {
      title: 'Evening Biking',
      username: 'biking122',
      content: 'I did some biking today',
      imageUrl: 'assets/images/biking.jpg',
    },
    {
      title: 'Lovely picnic',
      username: 'foodlover',
      content: 'Had a very lovely picnic yesterday',
      imageUrl: 'assets/images/picnic.jpg',
    },
  ];
}
