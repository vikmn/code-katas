import {State, TicTacToe} from "../main/tictactoe";


describe("tic tac toe game", () => {
  test("should be able to create a game", () => {
    const game = new TicTacToe();

    expect(game.getStatus()).toEqual({state: State.Started, nextPlayer: 'X'})

  })

  test("when a move is made the next player should be Y", () => {
    const game = new TicTacToe();
    game.play()

    expect(game.getStatus()).toEqual({state: State.Started, nextPlayer: 'Y'})

  })
})