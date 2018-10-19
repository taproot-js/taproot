const { expect } = require('chai');
const { path } = require('../..');
const { PATH } = require('../../src/constants/dsl')

describe("The path combinator", () => {

    it("should take a string as its first parameter and an array as it's second", () => {
        expect(() => path()).to.throw("DSL Parse Error: Invalid arguments passed to path");
        expect(() => path("/api")).to.throw("DSL Parse Error: Invalid arguments passed to path");
    });

    it("should construct a @@PATH node with the arguments provided", () => {
        const p = "/api";
        const children = [];

        expect(path(p, children)).to.eql({
            type: PATH,
            path: "/api",
            children: []
        });
    });
});