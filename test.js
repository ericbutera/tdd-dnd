const test = require('ava');
const { Character, Alignments } = require('./game')

// https://github.com/avajs/ava/blob/main/docs/03-assertions.md
// .assert(val)
// .truthy(val)
// .falsy(val)
// .true(val)
// .false(val)
// .is(val, expected) `Object.is`()
// .not(val, expected) inverse of `is`
// .deepEqual(val, expected)
// .notDeepEqual(val, expected)
// .like(val, selector) https://github.com/avajs/ava/blob/main/docs/03-assertions.md#likevalue-selector-message
test('create a character', t => {
    const character = new Character('Eric');
    t.is(character.name, 'Eric');
});

test('default alignment is neutral', t => {
    const character = new Character('Eric');
    t.is(Alignments.Neutral, character.alignment);
});

test('can get & set alignment', t => {
    const character = new Character('Eric');
    character.alignment = Alignments.Evil;
    t.is(Alignments.Evil, character.alignment);
});

test('invalid alignment', t => {
    const character = new Character('Eric');
    t.throws(() => {
        character.alignment = 'no';
    }, { message: 'Invalid alignment' });
});

test('valid alignment is true', t => {
    t.true(Alignments.isValid(Alignments.Good));
})
