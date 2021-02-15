import {Constructor} from './constructor.mixin';

export const colorMixin = <T extends Constructor>(BaseClass: T = class {
} as T) =>
  class extends BaseClass {
    getColorString(value: number) {
      const hue = Math.floor((value) * 120 / 100);
      return ['hsl(', hue, ',100%,50%)'].join('');
    }
  };
