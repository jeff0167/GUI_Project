import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-live-session',
  templateUrl: './live-session.page.html',
  styleUrls: ['./live-session.page.scss'],
})
export class LiveSessionPage implements OnInit {

  selectedId: number = 0;

  constructor(private route: ActivatedRoute) { 

    this.selectedId = parseInt(this.route.snapshot.paramMap.get('selectedId'));
  }

  ngOnInit() {
  }

}
