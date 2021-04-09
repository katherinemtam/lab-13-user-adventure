import { findById } from '../utils/utils.js';

const test = QUnit.test;

test('should find correct item in array', (expect) => {

    const monstinc = [
        { id: 'mike', type: 'monster' },
        { id: 'boo', type: 'human' }
    ];

    const expected = { id: 'boo', type: 'human' };

    const actual = findById(monstinc, 'boo');

    expect.deepEqual(actual, expected);
});
