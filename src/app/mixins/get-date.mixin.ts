
import { Constructor } from './constructor.mixin';

export const getDateMixin = <T extends Constructor>(BaseClass: T = class { } as T) =>
  class extends BaseClass {
    getDate(date: Date) {
      date.setHours(-date.getTimezoneOffset() / 60, 0, 0);
      const [year, month, datetime] = date.toISOString().split('-');
      return `${year}-${month}-${datetime.substr(0, 2)}`;
    }
  };
