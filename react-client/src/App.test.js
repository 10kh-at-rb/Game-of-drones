import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'
import gameEngine from './components/game-components/game-engine';
import GameEngine from './components/game-components/game-engine';
configure({ adapter: new Adapter() });

describe('GameEngine', function () {

	let gameEngine = new GameEngine();

	describe('#setPlayerOneName("jhon")', function () {
		it('should set the player one name ', function () {
			gameEngine.setPlayerOneName('jhon');
			expect(gameEngine.playerOne.name).to.equal('jhon');
		});
	});

	describe('#setPlayerTwoName("juan")', function () {
		it('should set the player two name ', function () {
			gameEngine.setPlayerOneName('juan');
			expect(gameEngine.playerOne.name).to.equal('juan');
		});
	});

	describe('#makeMove("rock", "scissor")', function () {
		it('should returns rock ', function () {
			let result = gameEngine.makeMove("rock", "scissor");
			expect(result).to.equal('rock');
		});
	});

	describe('#makeMove("rock", "paper")', function () {
		it('should returns paper ', function () {
			let result = gameEngine.makeMove("rock", "paper");
			expect(result).to.equal('paper');
		});
	});

	describe('#makeMove("scissor", "paper")', function () {
		it('should returns scissor ', function () {
			let result = gameEngine.makeMove("scissor", "paper");
			expect(result).to.equal('scissor');
		});
	});
});

