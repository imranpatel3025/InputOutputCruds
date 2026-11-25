import { Component, OnInit, Output, ViewChild, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IpostsArr } from 'src/app/model/posts.model';
import { SnackBarService } from 'src/app/service/snack-bar.service';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnChanges {
  @ViewChild('postForm') postForm !: NgForm

  @Input() getEditPost!: IpostsArr

  @Output() newEmitPost: EventEmitter<IpostsArr> = new EventEmitter<IpostsArr>()
  @Output() updateEmitPost: EventEmitter<IpostsArr> = new EventEmitter<IpostsArr>()
 
  constructor(private _snackBar : SnackBarService) { }

  isInEditMode: boolean = false

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let editPost = changes["getEditPost"].currentValue

    setTimeout(() => {
      if (editPost) {
        this.postForm.form.patchValue(editPost)
        this.isInEditMode = true
      }
    });
  }

  onPostAdd() {
    let newPost = this.postForm.form.value
    this.newEmitPost.emit(newPost)
    this.postForm.reset()
  }

  onUpdate(){
    if(this.postForm.invalid){
      this.postForm.form.markAllAsTouched()
    }else{
      let UpdateObj: IpostsArr = {...this.postForm.value, id : this.getEditPost.id}
      this.isInEditMode = false
      this.postForm.reset()
      this.updateEmitPost.emit(UpdateObj)
      // console.log(UpdateObj)
    }
  }

}
