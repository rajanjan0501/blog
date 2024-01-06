import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { PostlistService } from '../../services/postlist.service';

@Component({
  selector: 'app-postdetail',
  standalone: true,
  imports: [RouterModule,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './postdetail.component.html',
  styleUrl: './postdetail.component.css'
})
export class PostdetailComponent implements OnInit{
  constructor(
    private service: PostlistService,
    private activeRoute: ActivatedRoute
  ) {}

  course: any;
  courseId: any = 0;

  ngOnInit(): void {
    this.courseId = this.activeRoute.snapshot.params['id'];
    this.course = this.service.courses.find((x) => x.id == this.courseId);
  }
}
