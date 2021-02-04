import { Component, Input } from '@angular/core';
import { colorMixin } from 'src/app/mixins/color-mixin';

@Component({
  selector: 'app-password-meter',
  templateUrl: './password-meter.component.html',
  styleUrls: ['./password-meter.component.css']
})
export class PasswordMeterComponent extends colorMixin() {
  @Input() passwordString: string;
  constructor() { super(); }

  get passwordStrength() {
    const password = this.passwordString || '';
    const regexStrengths = [
      { regex: /[a-z]/, value: 1 },
      { regex: /[a-z](.)*[a-z]/, value: 3 },
      { regex: /[A-Z]/, value: 1 },
      { regex: /[A-Z](.)*[A-Z]/, value: 2 },
      { regex: /\W|_/, value: 2 },
      { regex: /(\W|_)(.)*(\W|_)/, value: 3 },
      { regex: /[0-9]/, value: 2 },
      { regex: /[0-9](.)*[0-9]/, value: 2 },
    ];
    const regexStrengthScore = regexStrengths.reduce((prev, next) => prev + (next.regex.test(password) ? next.value : 0), 0);
    const score = Math.min(4, password.length / 2) + regexStrengthScore;
    return (score / 20) * 100;
  }

  get colorString() { return this.getColorString(this.passwordStrength); }

}
