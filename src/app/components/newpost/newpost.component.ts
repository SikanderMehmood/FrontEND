import { Component, OnInit } from '@angular/core';
import { NewPost } from 'app/models/newPost';
import { SaveNewPostServiceService } from 'app/services/save-new-post-service.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  postTitle:string="New post";
  postShort:string="This is a very short post";
  postDescription:string="Some Long dscription, some very long discription";

  constructor(private service:SaveNewPostServiceService) { }

  ngOnInit(): void {
  }
  public saveNewPost(){
    let newPostModel = new NewPost();
    newPostModel.postName=this.postTitle;
    newPostModel.postShort=this.postShort;
    newPostModel.postDis=this.postDescription;
    this.service.saveNewPost(newPostModel);

  }

}
