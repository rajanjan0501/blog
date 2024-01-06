import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostlistComponent } from '../postlist/postlist.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  comments: any[] = [
    {name:"Lopa",
    text:"This is good one"}
  ];
  newComment: any= {
    name: '',
    text: ''
  };
  onSubmit() {
    this.comments.push(this.newComment);
    
    this.newComment = { name: '', text: '' };
  }
  
  
}
