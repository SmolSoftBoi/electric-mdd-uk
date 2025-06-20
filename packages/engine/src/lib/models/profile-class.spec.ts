import { isProfileClass } from './profile-class';

describe('isProfileClass', () => {
  it('validates a profile class', () => {
    expect(
      isProfileClass({
        id: 1,
        effectiveFromSettlementDate: new Date(),
        description: 'desc',
        switchedLoadProfileClassInd: false,
        effectiveToSettlementDate: null,
      })
    ).toBe(true);
  });
});
