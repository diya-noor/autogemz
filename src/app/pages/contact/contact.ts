import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PluginInit } from '../../services/plugin-init';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements AfterViewInit {
  formData = { name: '', email: '', phone: '', message: '' };
  successMessage = false;
  errorMessage = false;
  submitting = false;

  constructor(private pluginInit: PluginInit, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.pluginInit.init();
  }

  onSubmit(): void {
    this.submitting = true;
    this.successMessage = false;
    this.errorMessage = false;
    const body = new FormData();
    Object.entries(this.formData).forEach(([k, v]) => body.append(k, v));
    this.http.post('contact.php', body).subscribe({
      next: () => { this.successMessage = true; this.submitting = false; this.formData = { name: '', email: '', phone: '', message: '' }; },
      error: () => { this.errorMessage = true; this.submitting = false; }
    });
  }
}
