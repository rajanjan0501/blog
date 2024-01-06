import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,HeaderComponent,FooterComponent,RouterOutlet,RouterModule,PostlistComponent,AddpostComponent,CommentComponent,PostdetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-application';
}
