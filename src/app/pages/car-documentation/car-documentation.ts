import { Component, AfterViewInit } from '@angular/core';
import { PluginInit } from '../../services/plugin-init';

@Component({
  selector: 'app-car-documentation',
  standalone: false,
  templateUrl: './car-documentation.html',
  styleUrl: './car-documentation.css',
})
export class CarDocumentation implements AfterViewInit {
  constructor(private pluginInit: PluginInit) {}

  ngAfterViewInit(): void {
    this.pluginInit.init();
  }
}
