import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent implements OnInit {
  minutes = 10;
  seconds = 59;
  pauseLabel: string;
  isPaused: boolean;

  constructor() {
    this.resetTime();
    setInterval(() => this.tick(), 1000);
  }

  ngOnInit() {
  }

  tick(): void {

    if (!this.isPaused) {
      this.pauseLabel = 'Pause';
      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.resetTime();
        }
      }
    }
  }

  resetTime() {
    this.minutes = 24;
    this.seconds = 59;
    this.pauseLabel = 'Start';
    this.togglePause();
  }

  togglePause() {
    console.log(this.isPaused)
    this.isPaused = !this.isPaused;
    if (this.minutes < 24 || this.seconds < 59) {
      this.pauseLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }
}
