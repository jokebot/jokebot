'use strict';

var JokeBot = require("./index.js");
var sinon = require("sinon");

it("sends jokes", () => {
    var responseStub = sinon.stub();

    JokeBot.onMention(null, responseStub);

    expect(responseStub.callCount).to.equal(1);

    var joke = responseStub.args[0][0];
    expect(joke).to.be.a.string();
    expect(joke).to.have.length.above(0);
}
