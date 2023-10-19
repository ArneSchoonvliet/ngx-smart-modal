import { Component, OnInit, ViewContainerRef, inject } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'test';
  private _modalService = inject(NgxSmartModalService);
  private _vcr = inject(ViewContainerRef);

  ngOnInit(): void {
    this._modalService.create("test", "test arne", this._vcr).open();
  }

  open(): void {
    this._modalService.create("test", `test arne ${Date.now}`, this._vcr).open();
  }
}
