import {beforeEach, bootstrap, describe, getEl, it, setupModule} from '@angular/catalyst';

import {AppComponent} from './app.component';

describe('AppCatalystComponent', () => {
  beforeEach(() => {
    setupModule({
      declarations: [AppComponent],
    });
  });

  it('should create the app', () => {
    const app = bootstrap(AppComponent);
    expect(app).toBeTruthy();
  });

  it(`should have as title 'catalyst-test'`, () => {
    const app = bootstrap(AppComponent);
    expect(app.title).toEqual('catalyst-test');
  });

  it('should render title', () => {
    bootstrap(AppComponent);
    expect(getEl('.content span')?.textContent)
        .toContain('catalyst-test app is running!');
  });
});
