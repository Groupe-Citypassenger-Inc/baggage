import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeHandlerService {
  is_dark_mode_enabled: boolean;
  theme: string;
  theme_changes: Subject<string> = new Subject<string>();
  constructor() {
    this.is_dark_mode_enabled = localStorage.getItem('theme') === 'Dark' ? true : false;
    this.theme = localStorage.getItem('theme');
  }

  update_theme(theme:string): void{
    this.theme = theme;
    localStorage.setItem('theme', theme);
    this.is_dark_mode_enabled = localStorage.getItem('theme') === 'Dark' ? true : false;
    this.theme_changes.next(theme);
  }

  get_theme(): string{
    return localStorage.getItem('theme');
  }
}


