import { isProfileClass } from './profile-class';

describe('isProfileClass', () => {
  it('validates a profile class', () => {
    expect(
      isProfileClass({
        id: 1,
        effectiveFromSettlementDate: new Date('1996-04-01'),
        description: 'Domestic Unrestricted',
        switchedLoadProfileClassInd: false,
        effectiveToSettlementDate: null,
      })
    ).toBe(true);
  });
});
