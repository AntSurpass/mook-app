import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges{


  @Input()
  private rating: number = 0;

  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter();

  @Input()
  private onlyRead: boolean = true;

  private stars: boolean[];
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating)
    }
  }

  selectStar(index:number){
    if(!this.onlyRead) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

}
