import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() icon: string = "";
  @Input() text: string = "";
  @Input() value: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
