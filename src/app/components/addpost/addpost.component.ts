import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostlistService } from '../../services/postlist.service';
import { addpost } from '../model/addPost';

@Component({
  selector: 'app-addpost',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.css'
})
export class AddpostComponent {

  constructor(private serv:PostlistService,private router:Router){}
  data:any[]=[];

  @ViewChild('userForm')userForm:NgForm
  onSubmit(add:addpost) {
    this.serv.courses.push(add);
    this.router.navigate(['\posts']);
  }
}
