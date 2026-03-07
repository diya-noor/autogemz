import { Component, AfterViewInit } from '@angular/core';
import { PluginInit } from '../../services/plugin-init';

@Component({
  selector: 'app-investment-opportunity',
  standalone: false,
  templateUrl: './investment-opportunity.html',
  styleUrl: './investment-opportunity.css',
})
export class InvestmentOpportunity implements AfterViewInit {
  constructor(private pluginInit: PluginInit) {}

  ngAfterViewInit(): void {
    this.pluginInit.init();
  }
}
