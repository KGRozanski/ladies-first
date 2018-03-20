import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  public posts = [];

  constructor(private newsService: NewsService) {}



  ngOnInit() {
    this.newsService.getNews()
      .subscribe(data => this.posts = data);
  }
}