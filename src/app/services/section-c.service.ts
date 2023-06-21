import { Injectable } from '@angular/core';
export interface Card{
  icon?:string;
  title?:string;
  description?:string;
}

@Injectable({
  providedIn: 'root'
})
export class SectionCService {

  cards=[
    {
      icon:"/assets/icon-a-sec-c.png",
      title:"Close to the metal",
      description:"From direct negotiations with card networks and banks to checkout flows in the browser, we operate on and optimise at every level of the financial stack.",
    },
    {
      icon:"/assets/icon-b-sec-c.png",
      title:"Fastest-improving platform",
      description:"We release hundreds of features and improvements each year to help you stay ahead of industry shifts. (On average, we deploy our production API 16x per day.)",
    },
    {
      icon:"/assets/icon-c-sec-c.png",
      title:"Battle-tested reliability",
      description:"Our systems operate with 99.99%+ uptime and are highly scalable and redundant. Stripe is certified to the highest compliance standards.",
    },
    {
      icon:"/assets/icon-d-sec-c.png",
      title:"Intelligent optimisations",
      description:"Our machine learning models train on billions of data points and help increase revenue across conversion, fraud, revenue recovery, and more.c",
    }
  ]

  constructor() { }
}
