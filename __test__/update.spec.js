import {update} from '../src/index';

const state = {
	firstname: 'Lars',
	lastname: '',
	address: {
		zip: 2400
	},
	vatrates: [{ rate: 99 }, { rate: 25 }],
	years: [1995, 1980, 1957]
};

it('handles adding new property to state', () => {
	const nextState = update(state, 'unicorn.cats', true);
	expect(nextState.unicorn.cats).toBe(true);
});

it('does not copy source if value did not change', () => {
	const nextState = update(state, 'address.zip', 2400);
	expect(nextState).toBe(state);
	const nextState1 = update(state, 'firstname', 'Lars');
	expect(nextState1).toBe(state);
});

it('does not mutate the original objec', () => {
	const nextState = update(state, 'address.zip', '2400');
	expect(nextState).not.toBe(state);
});

it('works for arrays of objects', () => {
	const nextState = update(state, 'vatrates[1].rate', 7);
	expect(nextState.vatrates[1].rate).toBe(7);
});

it('works for arrays', () => {
	const nextState = update(state, 'years[1]', 7);
	expect(nextState.years[1]).toBe(7);
});