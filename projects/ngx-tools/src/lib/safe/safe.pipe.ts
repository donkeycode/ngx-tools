import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'ngtSafe', pure: false })
export class SafeHtml implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(value: string, typeSafe: SafeType = 'html') {
    if (typeSafe === 'html') {
      return this.sanitizer.bypassSecurityTrustHtml(value);
    }

    if (typeSafe === 'style') {
      return this.sanitizer.bypassSecurityTrustStyle(value);
    }

    return '';
  }
}

type SafeType = 'html' | 'style';
