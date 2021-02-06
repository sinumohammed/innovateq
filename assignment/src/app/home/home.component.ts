import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Card } from './card.model';
import { Blog } from './blog.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards!: Array<Card>
  blogs!: Array<Blog>
  card_url: string = 'http://localhost:3000/cards'
  blog_url: string = 'http://localhost:3000/blogs'


  constructor(private service: ApiService) { }

  ngOnInit(): void {

    this.service.getCards(this.card_url)
      .subscribe(response => {
        this.cards = response;
      });

    this.service.getBlogs(this.blog_url)
      .subscribe(response => {
        this.blogs = response;
      });
  }

}
