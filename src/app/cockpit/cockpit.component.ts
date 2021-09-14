import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output()
  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output("bpCreated")
  blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // newServerName = "";
  // newServerContent = "";
  @ViewChild("serverContentInput", { static: true })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(theServerNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: theServerNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(theServerNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: theServerNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
