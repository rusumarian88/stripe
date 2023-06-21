import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtitle-title',
  templateUrl: './subtitle-title.component.html',
  styleUrls: ['./subtitle-title.component.scss']
})
export class SubtitleTitleComponent implements OnInit {

  @Input() subtitle:string=""
  @Input() title:string=""
  @Input() description:string=""
  @Input() secondOption:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

}
