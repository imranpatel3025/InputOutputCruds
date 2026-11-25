import { Component, Input, OnInit } from '@angular/core';
import { IpostsArr } from 'src/app/model/posts.model';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss']
})
export class PostCardsComponent implements OnInit {

  @Input() postData! : Array<IpostsArr> 
  constructor() { }

  ngOnInit(): void {
  }

}
