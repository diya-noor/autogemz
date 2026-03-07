import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PluginInit } from '../../services/plugin-init';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.html',
  styleUrl: './appointment.css',
})
export class Appointment implements AfterViewInit {
  formData = { service: '', date: '', time: '', name: '', email: '', phone: '', message: '' };
  submitted = false;
  errorMessage = false;
  submitting = false;

  constructor(private pluginInit: PluginInit, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.pluginInit.init();
  }

  onSubmit(): void {
    this.submitting = true;
    this.errorMessage = false;
    const body = new FormData();
    Object.entries(this.formData).forEach(([k, v]) => body.append(k, v));
    this.http.post('booking.php', body).subscribe({
      next: () => { this.submitted = true; this.submitting = false; },
      error: () => { this.errorMessage = true; this.submitting = false; }
    });
  }

  reOrder(): void {
    this.submitted = false;
    this.formData = { service: '', date: '', time: '', name: '', email: '', phone: '', message: '' };
  }
}
