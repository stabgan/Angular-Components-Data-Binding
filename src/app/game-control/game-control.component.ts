import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {
  @Output() intervalFired = new EventEmitter<number>();
  interval: ReturnType<typeof setInterval> | null = null;
  lastNumber = 0;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.pauseGame();
  }

  startTimer() {
    // Guard against multiple intervals stacking
    if (this.interval) {
      return;
    }
    this.interval = setInterval(() => {
      this.lastNumber++;
      this.intervalFired.emit(this.lastNumber);
    }, 1000);
  }

  pauseGame() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
