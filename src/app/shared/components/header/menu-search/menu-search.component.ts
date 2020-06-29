import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ILink } from '../../../interfaces/link.interface';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LinkService } from '../../../services/link.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.css']
})
export class MenuSearchComponent {
  listItems$: Observable<ILink[]> = this.linkService.allLinks$.pipe(
    tap(items => (this.listItems = items))
  );
  listItems: ILink[];
  searchForm: FormGroup = this.fb.group({ search: [''] });;
  constructor(
    private fb: FormBuilder,
    private linkService: LinkService,
    private router: Router
  ) { }

  get search(): FormControl {
    return this.searchForm.get('search') as FormControl;
  }
  submitSearchForm() {
    const matched = this.listItems.filter(item => item.name === this.search.value);
    this.search.setValue('');
    if (matched.length > 0) {
      this.router.navigate([`/${matched[0].link}`]);
    }
  }

}
