import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IpostsArr } from 'src/app/model/posts.model';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @ViewChild('postForm') postForm ! : NgForm

  @Output() newEmitPost: EventEmitter<IpostsArr> = new EventEmitter<IpostsArr>()
  constructor() { }

  ngOnInit(): void {
  }

  onPostAdd(){
    let newPost = this.postForm.form.value
    this.newEmitPost.emit(newPost)
  }

}
