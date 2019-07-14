import {Component, OnInit} from '@angular/core';
import {GetUserListService} from "../get-user-list.service";
import {ActivatedRoute} from "@angular/router";
import {Subscribable, Subscription} from "rxjs";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public user: any = {};
  private routeSub: Subscription;

  constructor(
    private getUserListService: GetUserListService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.routeSub = this.route.params
      .subscribe(params => {
        this.getUserListService
          .getUser(params.id)
          .subscribe(res => {
              this.user = res.data;
            }
          );
      });
  }
}
