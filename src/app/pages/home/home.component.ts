import { Component, OnInit } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { enviroment } from 'src/environments/environments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = enviroment.baseApiUrl;

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getAll().subscribe((items) => {
      const data = items.data;

      const handledData = data.map((item) => {
        return {
          ...item,
          created_at: new Date(item.created_at!).toLocaleDateString('pt-BR'),
        };
      });

      this.allMoments = handledData;
      this.moments = handledData;
    });
  }
}
