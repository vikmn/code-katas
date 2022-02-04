import {Player, Square, TicTacToeGame} from "../main/TicTacToe";

describe('ticTacToe', () => {
  it('should initialise the game', () => {
    const game = new TicTacToeGame();
    expect(game.getStatus()).toEqual('ON')

    expect(game.getNextPlayer()).toEqual(Player.X)
  });

  it('should be Ys move after X plays', () => {
    const game = new TicTacToeGame();

    game.play(Square.TopLeft)

    expect(game.getStatus()).toEqual('ON')
    expect(game.getNextPlayer()).toEqual(Player.Y)
  });

  it('should be Xs move after Y plays', () => {
    const game = new TicTacToeGame();

    game.play(Square.TopLeft)
    game.play(Square.TopRight)

    expect(game.getStatus()).toEqual('ON')
    expect(game.getNextPlayer()).toEqual(Player.X)
  });

  it('should not allow playing in a played position', () => {
    const game = new TicTacToeGame();

    game.play(Square.TopLeft)

    expect(() => game.play(Square.TopLeft)).toThrowError()
  });

  it('x should win when played in the top line', () => {
    const game = new TicTacToeGame();

    game.play(Square.TopLeft)
    game.play(Square.BottomLeft);
    game.play(Square.TopMiddle)
    game.play(Square.BottomMiddle);
    game.play(Square.TopRight)

    expect(game.getStatus()).toEqual('X has won')
  });

  it('x should not win blocked by Y in top line', () => {
    const game = new TicTacToeGame();

    game.play(Square.TopLeft)
    game.play(Square.TopMiddle);
    game.play(Square.TopRight)

    expect(game.getStatus()).toEqual('ON')
  });

  it('should not allow playing in positions Y has played in', () => {
    const game = new TicTacToeGame();

    game.play(Square.TopLeft)
    game.play(Square.TopRight)

    expect(() => game.play(Square.TopRight)).toThrowError()
  });

  it('y should win when played in the top line', () => {
    const game = new TicTacToeGame();

    game.play(Square.BottomLeft);
    game.play(Square.TopLeft)
    game.play(Square.BottomMiddle);
    game.play(Square.TopMiddle)
    game.play(Square.MiddleLeft);
    game.play(Square.TopRight);

    expect(game.getStatus()).toEqual('Y has won')
  });

  it('x should win when played in the Middle line', () => {
    const game = new TicTacToeGame();

    game.play(Square.MiddleLeft)
    game.play(Square.BottomLeft);
    game.play(Square.MiddleMiddle)
    game.play(Square.BottomMiddle);
    game.play(Square.MiddleRight)

    expect(game.getStatus()).toEqual('X has won')
  });

  it('x should win when played in the Left Vertical', () => {
    const game = new TicTacToeGame();

    game.play(Square.TopLeft)
    game.play(Square.MiddleMiddle);
    game.play(Square.MiddleLeft)
    game.play(Square.BottomMiddle);
    game.play(Square.BottomLeft)

    expect(game.getStatus()).toEqual('X has won')
  });

  it('Y should win when played in the Middle line', () => {
    const game = new TicTacToeGame();

    game.play(Square.BottomLeft);
    game.play(Square.MiddleLeft)
    game.play(Square.BottomMiddle);
    game.play(Square.MiddleMiddle)
    game.play(Square.TopRight)
    game.play(Square.MiddleRight)

    expect(game.getStatus()).toEqual('Y has won')
  });

  it('x should win when played in the Bottom line', () => {
    const game = new TicTacToeGame();

    game.play(Square.BottomLeft);
    game.play(Square.MiddleMiddle)
    game.play(Square.BottomMiddle);
    game.play(Square.MiddleRight)
    game.play(Square.BottomRight);

    expect(game.getStatus()).toEqual('X has won')
  });

  it('y should win when played in the Bottom line', () => {
    const game = new TicTacToeGame();

    game.play(Square.TopRight);
    game.play(Square.BottomLeft);
    game.play(Square.MiddleMiddle)
    game.play(Square.BottomMiddle);
    game.play(Square.MiddleRight)
    game.play(Square.BottomRight);

    expect(game.getStatus()).toEqual('Y has won')
  });
});
