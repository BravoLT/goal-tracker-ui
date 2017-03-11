import { GoalTrackerUiPage } from './app.po';

describe('goal-tracker-ui App', () => {
  let page: GoalTrackerUiPage;

  beforeEach(() => {
    page = new GoalTrackerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
