import { Injectable } from '@angular/core';

export interface Card{
  icon?:string;
  title?:string;
  description?:string;
  text?:string;
  iconBtn?:string;
}

@Injectable({
  providedIn: 'root'
})
export class SectionEService {

  cards=[
    {
      icon:"/assets/icon-a-sec-e.png",
      title:"Always know what you pay",
      description:"Integrated per-transaction pricing with no hidden fees.",
      text:"Pricing details",
      iconBtn:"/assets/icon-btn2.png",
    },
    {
      icon:"/assets/icon-b-sec-e.png",
      title:"Start your integration",
      description:"Get up and running with Stripe in as little as 10 minutes.",
      text:"API reference",
      iconBtn:"/assets/icon-btn2.png",
    }
  ]

  constructor() { }
}
