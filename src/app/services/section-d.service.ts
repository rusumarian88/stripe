import { Injectable } from '@angular/core';

export interface Card{
  title?:string;
  description?:string;
}


@Injectable({
  providedIn: 'root'
})
export class SectionDService {

  cards=[
    {
      title:"250M+",
      description:"API requests per day, peaking at 13,000 requests a second.",
    },
    {
      title:"99.999%",
      description:"of U.S adults have bought from businesses using stripe.",
    },
    {
      title:"47+",
      description:"currencies and payment methods supported.",
    },
    {
      title:"135+",
      description:"countries with local acquiring, optimising acceptance rates.",
    }
  ]

  constructor() { }
}
