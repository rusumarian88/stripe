import { Injectable } from '@angular/core';

export interface Card{
  icon?:string;
  title?:string;
  description?:string;
  text?:string;
  iconBtn:string;
}

@Injectable({
  providedIn: 'root'
})
export class SectionBService {

  cards=[
    {
      icon:"/assets/icon-a-sec-b.png",
      title:"Tools for every stack",
      description:"We offer client and server libraries in everything from React and PHP to .NET and iOS.",
      text:"See libraries",
      iconBtn:"/assets/icon-btn.png",
    },
    {
      icon:"/assets/icon-b-sec-b.png",
      title:"Prebuilt integrations",
      description:"Use integrations for systems like Shopify, WooCommerce, NetSuite, and more.",
      text:"Explore partners",
      iconBtn:"/assets/icon-btn.png",
    }
  ]

  constructor() { }
}
