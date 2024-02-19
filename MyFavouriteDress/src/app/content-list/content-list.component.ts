import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { NgFor, NgStyle } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [NgFor, NgStyle, ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
    contentArray: Content[];

    constructor() {
      this.contentArray = [
        {
          id: 0,
          title: 'Plazzo',
          description: 'long -open bottom pants',
          creator: 'Enzo',
          imgUrl: 'assets/images/img.webp',
          type: 'pants',
          tags: ['comfortable', 'full-length', 'loose'],
        },
        {
          id: 1,
          title: 'Mermaid skirt',
          description: 'different and elegant dress with represent fish bodu structure',
          creator: 'Ruchi ',
          imgUrl: 'assets/images/img1.jpg',
          type: 'Skirt',
          tags: ['stylish', 'fashionale', 'elegance'],
        },
        {
          id: 2,
          title: 'Middi',
          description: 'off-shouldered knee-touch long skirts',
          creator: 'Pawan',
          imgUrl: 'assets/images/img2.jpg',
          type: 'Skirt',
          tags: ['trendy', 'fashionable', 'formal'],
        },
        {
          id: 3,
          title: 'Frock',
          description: 'Chest fitted dress with loose and open flaired bottom',
          creator: 'Gurdeep',
          imgUrl: 'assets/images/img3.webp',
          type: 'Skirt',
          tags: ['comfortable', 'handy', 'cozy'],
        },
        {
          id: 4,
          title: 'Gown',
          description: 'floor touch long elegant dress',
          creator: 'Rani ',
          imgUrl: 'assets/images/img4.jpg',
          type: 'Formal',
          tags: ['designer', 'stylish', 'elegance'],
        },
        {
          id: 5,
          title: 'Jump-suit',
          description: 'semi-formal office wear dress with joint pants',
          creator: 'Kiran',
          imgUrl: 'assets/images/img5.jpg',
          type: 'semi-formal',
          tags: ['comfortable', 'formal', 'stylish'],
        },
      ]
    }
}
