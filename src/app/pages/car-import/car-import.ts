import { Component, AfterViewInit } from '@angular/core';
import { PluginInit } from '../../services/plugin-init';

@Component({
  selector: 'app-car-import',
  standalone: false,
  templateUrl: './car-import.html',
  styleUrl: './car-import.css',
})
export class CarImport implements AfterViewInit {
  constructor(private pluginInit: PluginInit) {}

  ngAfterViewInit(): void {
    this.pluginInit.init();
  }
}
