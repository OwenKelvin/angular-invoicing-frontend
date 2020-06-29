
import { Constructor } from './constructor.mixin';

export const colorMixin = <T extends Constructor>(BaseClass: T = class { } as T) =>
  class extends BaseClass {
    getColorString(value: number) {
      const hue = ((value / 100) * 120).toString(10);
      return ['hsl(', hue, ',100%,50%)'].join('');
    }
  };