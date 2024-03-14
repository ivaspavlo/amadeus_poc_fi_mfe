import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(
      take(1)
    ).subscribe(console.log);
  }
}
