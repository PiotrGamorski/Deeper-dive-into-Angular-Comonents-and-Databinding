import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "TestServer", content: "Just a test!" },
  ];

  emittedOddNumbers: number[] = [];
  emittedEvenNumbers: number[] = [];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed!";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  // methods for the GameControl exercise
  onIntervalFired(theEmittedNumber: number) {
    console.log(theEmittedNumber);
    if (theEmittedNumber % 2 === 0) {
      this.emittedEvenNumbers.push(theEmittedNumber);
    } else {
      this.emittedOddNumbers.push(theEmittedNumber);
    }
  }

  onClearArrays(numberArrays: {oddNumbers: number[], evenNumbers: number[]}) {
    this.emittedOddNumbers = numberArrays.oddNumbers;
    this.emittedEvenNumbers = numberArrays.evenNumbers;
  }
} // End of the class
