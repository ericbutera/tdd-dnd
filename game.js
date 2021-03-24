/**
 * Alignments 
 * It would be nice if there was an actual Enum type.. wait.. typescript? oh no..
 */
const Alignments = {
    Good: 'Good',
    Evil: 'Evil',
    Neutral: 'Neutral',

    /**
     * Is the alignment valid? 
     * @param {string} alignment 
     * @returns {boolean}
     */
    isValid: alignment => {
        return Object
            .values(Alignments)
            .includes(alignment);
    }
};

/**
 * Game Character
 */
class Character {
    constructor(name, alignment) {
        this.name = name;
        this.alignment = Alignments.Neutral;
    }

    get alignment() {
        return this._alignment;
    }

    /**
     * @param {Alignment} alignment alignment
     * @throws {Error} Invalid alignment
     */
    set alignment(alignment) {
        if (!Alignments.isValid(alignment))
            throw Error('Invalid alignment');

        this._alignment = alignment;
    }
}

exports.Character = Character;
exports.Alignments = Alignments;