import {Component, OnInit} from '@angular/core';
import {GetUserListService} from "./get-user-list.service";
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(

  ) {
  }

  public ngOnInit(): void {

  }
}
