import { Component, AfterViewInit } from '@angular/core';
import { PluginInit } from '../../services/plugin-init';

@Component({
  selector: 'app-car-inspection',
  standalone: false,
  templateUrl: './car-inspection.html',
  styleUrl: './car-inspection.css',
})
export class CarInspection implements AfterViewInit {
  constructor(private pluginInit: PluginInit) {}

  ngAfterViewInit(): void {
    this.pluginInit.init();
  }
}
