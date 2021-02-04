import { ShowPasswordDirective } from './show-password.directive';

describe('ShowPasswordDirective', () => {
  it('should create an instance', () => {
    const elementRef = jasmine.createSpyObj({ nativeElement: { }});
    const directive = new ShowPasswordDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
