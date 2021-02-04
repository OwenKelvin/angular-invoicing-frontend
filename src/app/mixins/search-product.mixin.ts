import { BehaviorSubject } from 'rxjs';
import { Constructor } from './constructor.mixin';

export const searchProductMixin = <T extends Constructor>(BaseClass: T = class { } as T) =>
  class extends BaseClass {
    filterStringSubject$ = new BehaviorSubject<string>('');
    filterStringAction$ = this.filterStringSubject$.asObservable();
  };
