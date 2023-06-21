import { Component, OnInit } from '@angular/core';
import { SectionBService } from 'src/app/services/section-b.service';
import { SectionCService } from 'src/app/services/section-c.service';
import { SectionDService } from 'src/app/services/section-d.service';
import { SectionEService } from 'src/app/services/section-e.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public sectionBService:SectionBService,
    public sectionCService:SectionCService,
    public sectionDService:SectionDService,
    public sectionEService:SectionEService,

  ) { }

  ngOnInit(): void {
  }

}
