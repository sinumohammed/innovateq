import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() img: string = "";
  @Input() title: string = "";
  @Input() desc: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
