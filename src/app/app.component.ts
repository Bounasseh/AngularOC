import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  faceSnaps: FaceSnap[] = [];

  ngOnInit(): void {
    this.faceSnaps.push({
      title: 'One Piece !',
      description: 'One Piece is a Japanese manga series written and illustrated by Eiichiro Oda.',
      imageUrl: 'https://www.onefm.ch/wp-content/uploads/2020/09/onepiece-equipage-1000x600.jpg',
      createdDate: new Date(),
      snaps: 21,
      location: 'The Blue Sea'
    }, {
      title: 'Naruto !',
      description: 'Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto.',
      imageUrl: 'https://static.zerochan.net/Team.7.full.164066.jpg',
      createdDate: new Date(),
      snaps: 20,
      location: 'Konoha'
    }, {
      title: 'Bleach !',
      description: 'Bleach is a Japanese manga series written and illustrated by Tite Kubo.',
      imageUrl: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/Bleach-Header-Cropped.jpg',
      createdDate: new Date(),
      snaps: 11
    });
  }

}
