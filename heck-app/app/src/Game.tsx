import * as core from 'heck-core';
import React, { Props } from 'react';
import styled, { css } from 'react-emotion';

type BoardContainerProps = {
  size: string;
};
const BoardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  ${({ size }: BoardContainerProps) => css`
    height: ${size};
    width: ${size};
  `};
`;

type Rune = 'X' | 'O' | ' ';

type GameCellProps = {
  children: Rune;
};
const GameCell = (props: GameCellProps) => (
  <button
    {...props}
    style={{
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: '5px',
      lineHeight: 0,
      minHeight: '10px',
      border: '2px solid black',
    }}
  />
);


function nextPlayer(currentPlayer: Rune) {
  return currentPlayer === 'X' ? 'O' : 'X';
}

const initialState = {
  board: Array.from({ length: 9 }).fill(' ') as Rune[],
  player: 'X' as Rune,
  inText: '',
  outText: '',
};

type State = typeof initialState;


export class Game extends React.Component<{}, State> {
  public state = initialState;

  public render() {
    const date = new Date();
    const { board, player } = this.state;

    return (
      <article
        style={{
          fontFamily: 'monospace',
          fontSize: '20px',
        }}
      >
        <span>
          <textarea
                    value={this.state.inText} 
                    onChange={this.handleInTextChange} />
          <textarea readOnly value={this.state.outText} />
        </span>
      </article>
    );
  }

  private componentWillReceiveProps = (nextProps : Props) => {
    if ((nextProps.data.snip != this.state.snip.snip) || (nextProps.data.comment != this.state.snip.comment))
     this.setState({snip: nextProps.data});
}
  private handleInTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { this.setState(state => {
    return {
      player: state.player,
      board: state.board,
      inText: e.target.value,
      outText: core.doStuff(e.target.value)
      };
    });
    this.setState(this.state);
  }

  
}
