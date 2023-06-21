import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() icon?:string=""
  @Input() title?:string=""
  @Input() description?:string=""
  @Input() text?:string=""
  @Input() iconBtn?:string=""

  @Input() secondOption:boolean=false
  @Input() secondBtn:boolean=false


  constructor() { }

  ngOnInit(): void {
  }

}
