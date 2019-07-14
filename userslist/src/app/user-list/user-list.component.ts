import {Component, OnInit} from '@angular/core';
import {GetUserListService} from '../get-user-list.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private routeSub: Subscription;
  public userList: [] = [];

  constructor(
    private getUserListService: GetUserListService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.routeSub = this.route.params
      .subscribe(params => {
        const id = params.id || 1;
        const cachedList = this.getUserListService
          .cache.value.find(item => item.page === id);
        if (cachedList) {
          this.userList = cachedList;
        } else {
          this.getUserListService
            .getUserList(params.id)
            .subscribe(res => {
              console.log(res);
              this.userList = res.data;
              this.getUserListService
                .updateCache([...this.getUserListService.cache.value, res.data]);
            });
        }
      });
  }

}
