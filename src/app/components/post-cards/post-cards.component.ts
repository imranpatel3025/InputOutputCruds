import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IpostsArr } from 'src/app/model/posts.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss']
})
export class PostCardsComponent implements OnInit {

  @Input() postData!: Array<IpostsArr>

  @Output() emitEditPost: EventEmitter<IpostsArr> = new EventEmitter<IpostsArr>()
  @Output() emitRemovePost: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onEdit(post: IpostsArr) {
    this.emitEditPost.emit(post)
    // console.log(post)
  }

  onRemove(removeId: string) {
    // console.log(removeId)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

          this.emitRemovePost.emit(removeId)
      }
    });
   
  }

}
