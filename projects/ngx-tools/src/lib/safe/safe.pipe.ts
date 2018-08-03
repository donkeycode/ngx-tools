import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'ngtSafe', pure: false })
export class SafePipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(value: string, typeSafe: SafeType = 'html')
    : SafeHtml|SafeStyle|SafeScript|SafeUrl|SafeResourceUrl
  {
    if (typeSafe === 'html') {
      return this.sanitizer.bypassSecurityTrustHtml(value);
    }

    if (typeSafe === 'style') {
      return this.sanitizer.bypassSecurityTrustStyle(value);
    }

    if (typeSafe === 'script') {
      return this.sanitizer.bypassSecurityTrustScript(value);
    }

    if (typeSafe === 'url') {
      return this.sanitizer.bypassSecurityTrustUrl(value);
    }

    if (typeSafe === 'ressource') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }

    console.warn('SafePipe - no type in argument')
    return value;
  }
}

export type SafeType = 'html' | 'style' | 'script' | 'url' | 'ressource';
