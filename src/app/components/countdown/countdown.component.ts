import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-countdown',
    templateUrl: './countdown.component.html',
    styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
    @Input() seconds: number;
    intervalld: any;
    @Output() complete: EventEmitter<any> = new EventEmitter();
    @Output() progress: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
    }


    constructor() {
        this.intervalld = setInterval(() => this.tick(), 1000);
    }

    private tick(): void {
        if (--this.seconds < 1) {
            clearTimeout(this.intervalld);
            this.complete.emit(null);
        }
        this.progress.emit(this.seconds);
    }
}
