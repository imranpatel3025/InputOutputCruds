import { Component, OnInit } from '@angular/core';
import { postsArr } from 'src/app/const/posts';
import { IpostsArr } from 'src/app/model/posts.model';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  postsArr : Array<IpostsArr> = postsArr
  constructor() { }

  ngOnInit(): void {
  }

  onEmitPost(post: IpostsArr){
    postsArr.unshift(post)
  } 

}
