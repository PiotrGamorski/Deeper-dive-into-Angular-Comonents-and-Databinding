import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();

  @Output() clearedArrays = new EventEmitter<{
    oddNumbers: number[];
    evenNumbers: number[];
  }>();

  interval;
  lastNumber = 0;
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

  onPauseGame(theStartButtonRef: HTMLButtonElement) {
    clearInterval(this.interval);
    this.disablePauseButton = true;
    this.disableStartButton = false;

    console.log(theStartButtonRef.textContent.includes("Start Game"));
    theStartButtonRef.textContent = "Continue";
  }

  onRestartGame(theStartButtonRef: HTMLButtonElement) {
    this.onPauseGame(theStartButtonRef);
    this.clearedArrays.emit({ oddNumbers: [], evenNumbers: [] });
    this.lastNumber = 0;
    this.onStartGame();
  }
}
