import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

@Injectable()
export class EventService {
    constructor(private event: Events) {

    }

    publish(topic, data) {
        this.event.publish(topic, data);
    }

    subscribe(topic, handler) {
        this.event.subscribe(topic, handler);
    }
}
