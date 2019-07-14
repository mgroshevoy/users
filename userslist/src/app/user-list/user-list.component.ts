import {Component, OnInit} from '@angular/core';
import {GetUserListService} from '../get-user-list.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private routeSub: Subscription;
  public userList: any[] = [];
  public pagingItems: number[] = [];

  constructor(
    private getUserListService: GetUserListService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.routeSub = this.route.params
      .subscribe(params => {
        const id = +params.id || 1;
        const cachedList = this.getUserListService
          .cache.value.find(item => item.page === id);
        if (cachedList) {
          this.userList = cachedList;
          this.pagingItems = Array.from({length: cachedList.total_pages}, (v, k) => k + 1);
        } else {
          this.getUserListService
            .getUserList(params.id)
            .subscribe(res => {
              console.log(res);
              this.userList = res;
              this.pagingItems = Array.from({length: res.total_pages}, (v, k) => k + 1);
              this.getUserListService
                .updateCache([...this.getUserListService.cache.value, res]);
            });
        }
      });
  }

}
