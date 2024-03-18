import { Injectable, NgZone, inject } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabase: SupabaseClient;
  readonly ngZone = inject(NgZone);

  environment = {
    supabaseUrl: 'https://josedutrsuxgncgbwfeo.supabase.co',
    supabaseKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impvc2VkdXRyc3V4Z25jZ2J3ZmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3NzU3MjUsImV4cCI6MjAyMjM1MTcyNX0.8_RbG9IlEdFlXf0MJPhC0YPzFQCDIePhNpCvOFR3Dzs',
  };

  constructor() {
    this.supabase = this.ngZone.runOutsideAngular(() =>
      createClient(this.environment.supabaseUrl, this.environment.supabaseKey)
    );
  }
}
