import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss']
})
export class HederComponent implements OnInit {

  partners=["/assets/prt-a.png","/assets/prt-b.png","/assets/prt-c.png","/assets/prt-d.png","/assets/prt-e.png","/assets/prt-f.png","/assets/prt-g.png","/assets/prt-h.png"]

  constructor() { }

  ngOnInit(): void {
  }

}
