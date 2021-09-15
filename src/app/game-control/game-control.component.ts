import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  @Output() clearedArrays = new EventEmitter<{
    oddNumbers: number[];
    evenNumbers: number[];
  }>();

  disableStartButton: boolean = false;
  disablePauseButton: boolean = true;
  disableRestartButton: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
    this.disableStartButton = true;
    this.disablePauseButton = false;
    this.disableRestartButton = false;
  }

  onPauseGame() {
    clearInterval(this.interval);
    this.disablePauseButton = true;
    this.disableStartButton = false;
  }

  onRestartGame() {
    this.onPauseGame();
    this.clearedArrays.emit({oddNumbers: [], evenNumbers: []});
    this.lastNumber = 0;
    this.onStartGame();
  }
}
