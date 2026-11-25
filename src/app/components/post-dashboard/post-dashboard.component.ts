import { Component, OnInit } from '@angular/core';
import { postsArr } from 'src/app/const/posts';
import { IpostsArr } from 'src/app/model/posts.model';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  postsArr : Array<IpostsArr> = postsArr

  editPost! : IpostsArr
  constructor( private _snackBar : SnackBarService) { }

  ngOnInit(): void {
  }

  onEmitPost(post: IpostsArr){
    postsArr.unshift(post)

    this._snackBar.successSnackBar(`New Post Added Successfully !!!`)

  } 

  onEditPost(editObj : IpostsArr){
    // console.log(editObj)
    this.editPost = editObj
  }

  updateEmitPost(UpdateObj : IpostsArr){
    let updateIndex = postsArr.findIndex(p => p.id === UpdateObj.id)
    postsArr[updateIndex] = UpdateObj

    this._snackBar.successSnackBar(`Post with id ${UpdateObj.id} Updated Successfully !!!`)

  }

  onRemovePost(removeId: string){
    let getIndex = postsArr.findIndex(p => p.id === removeId)
    postsArr.splice(getIndex, 1)

    this._snackBar.successSnackBar(`Post with id ${removeId} is Removed Successfully !!!`)

  }

}
