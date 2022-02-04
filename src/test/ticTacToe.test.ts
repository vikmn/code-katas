class TicTacToeGame {
  getPlayedMoves() {
    return []
  }
}

describe('ticTacToe',  () => {
  it('should initialise the board', () => {
    const game = new TicTacToeGame();

    const playedMoves = game.getPlayedMoves();

    expect(playedMoves).toEqual([])
  });

  it('should ', () => {
    const game = new TicTacToeGame();

    const playedMoves = game.getPlayedMoves();

    expect(playedMoves).toEqual([])
  });
});
