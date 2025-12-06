import { Component, OnInit } from '@angular/core';
import { EventItem } from '../models/event-item';

@Component({
  selector: 'app-event-tracker',
  templateUrl: './event-tracker.component.html',
  styleUrls: ['./event-tracker.component.scss']
})
export class EventTrackerComponent implements OnInit {
  events: EventItem[] = [];

  // two-way bound fields
  title: string = '';
  date: string = '';

  private storageKey = 'campus_events_v1';

  ngOnInit(): void {
    this.loadEvents();
  }

  addEvent(): void {
    const titleTrim = this.title.trim();
    if (!titleTrim || !this.date) {
      return;
    }

    const newEvent: EventItem = {
      id: this.nextId(),
      title: titleTrim,
      date: this.date
    };

    this.events.push(newEvent);
    this.saveEvents();

    // clear inputs
    this.title = '';
    this.date = '';
  }

  private nextId(): number {
    if (this.events.length === 0) return 1;
    return Math.max(...this.events.map(e => e.id)) + 1;
  }

  private saveEvents(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.events));
    } catch (e) {
      console.warn('Could not save events to localStorage', e);
    }
  }

  private loadEvents(): void {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) {
        this.events = JSON.parse(raw) as EventItem[];
      }
    } catch (e) {
      console.warn('Could not load events from localStorage', e);
      this.events = [];
    }
  }
}
