import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent {
  searchTitle: string = '';
  searchMsg: string = '';
  isTitleFound: boolean = false;
  contents: Content[];

  constructor() {
    this.contents = [
      {
        id: 0,
        title: 'Plazzo',
        description: 'long -open bottom pants',
        creator: 'Enzo',
        imgURL: 'assets/Images/img.webp',
        type: 'pants',
        tags: ['comfortable', 'full-length', 'loose'],
      },
      {
        id: 1,
        title: 'Mermaid skirt',
        description: 'different and elegant dress with represent fish bodu structure',
        creator: 'Ruchi ',
        imgURL: 'assets/Images/img1.jpg',
        type: 'Skirt',
        tags: ['stylish', 'fashionale', 'elegance'],
      },
      {
        id: 2,
        title: 'Middi',
        description: 'off-shouldered knee-touch long skirts',
        creator: 'Pawan',
        imgURL: 'assets/Images/img2.jpg',
        type: 'Skirt',
        tags: ['trendy', 'fashionable', 'formal'],
      },
      {
        id: 3,
        title: 'Frock',
        description: 'Chest fitted dress with loose and open flaired bottom',
        creator: 'Gurdeep',
        imgURL: 'assets/Images/img3.webp',
        type: 'Skirt',
        tags: ['comfortable', 'handy', 'cozy'],
      },
      {
        id: 4,
        title: 'Gown',
        description: 'floor touch long elegant dress',
        creator: 'Rani ',
        imgURL: 'assets/Images/img4.jpg',
        type: 'Formal',
        tags: ['designer', 'stylish', 'elegance'],
      },
      {
        id: 5,
        title: 'Jump-suit',
        description: 'semi-formal office wear dress with joint pants',
        creator: 'Kiran',
        imgURL: 'assets/Images/img5.jpg',
        type: 'semi-formal',
        tags: ['comfortable', 'formal', 'stylish'],
      },
      {
        id: 6,
        title: 'Skater',
        description: 'Performance with Elegance and beauty',
        creator: 'sletter',
        imgURL: 'assets/Images/img6.jpeg',
        type: '',
        tags: ['quattro', 'precision designing', 'luxurious'],
      },
    ];
  }

  searchContentByTitle() {
    const doesTitleMatch = this.contents.some(
      (content) =>
        content.title.toLowerCase() === this.searchTitle.toLowerCase()
    );

    this.isTitleFound = doesTitleMatch;
    this.searchMsg = doesTitleMatch
      ? `Content with title '${this.searchTitle}' exists.`
      : `Content with title '${this.searchTitle}' does not exist.`;
  }
}