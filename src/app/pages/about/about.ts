import { Component, AfterViewInit } from '@angular/core';
import { PluginInit } from '../../services/plugin-init';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {
  constructor(private pluginInit: PluginInit) {}

  ngAfterViewInit(): void {
    this.pluginInit.init();
  }
}
