import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import { BlogInfo } from '../classes/blog-info';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: any;

  constructor(private data: BlogDataService) { }

  ngOnInit() {

  }

    simpleClick() {

      return this.data.getBlogInfo().subscribe(data => {
        this.blogs = data;
        console.log(this.blogs);
      });

    }

}
