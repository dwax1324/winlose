import React, { Component } from 'react';
import styled from 'styled-components';

const Button1 = styled.button`
  background-color: #64b5f6;
  outline: 0;
  padding: 5px 15px;
  margin: 5px;
  color:white;
  cursor:pointer;
  border-radius: 7px;
  height:45px;


  &:hover{
    background-color: #1565c0;
  }
  font-family: cursive;
  font-size:20px;
  text-shadow: 2px 2px 2px black;
`

const Button2 = styled.button`
  outline: 0;
  padding: 5px 15px;
  margin: 5px;
  color:white;
  background-color: #d81b60

;
  font-family: cursive;
  font-size:20px;
  cursor:pointer;
    border-radius: 7px;
    height:45px;
  text-shadow: 2px 2px 2px black;
    &:hover{
    background-color: #880e4f;
  }
`

const Box = styled.div`
height:100vh;
  display: flex;
  align-items:center;
  justify-content:center;
  background-color:#212121;
`

const Table = styled.div`
  height:200px;
  border:0.1px solid white;
  width: 200px;
  color :white;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  margin-right:20px;
  font-size: 20px;
  text-shadow: 1px 1px 1px black;
`

const Win = styled.div`
  color: #64b5f6;
  margin: 5px;
  text-align:center;
`
const Lose = styled.div`
  color : #d81b60;
  margin: 5px;
  text-align:center;
`
const WinPoint = styled.div``
const LosePoint = styled.div``
const WinLose = styled.div`
  display: flex;
  justify-content:center;

`
const Total = styled.div`
    text-align:center;
`

const Rate = styled.div`
  color:#f1f8e9;
`

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      win: 0,
      lose: 0,
      total: 0,
      rate:0
    }
    setInterval(() => {
      if ((this.state.win + this.state.lose) === 0) {
        this.setState({
          rate: 0
        })
      } else {
      this.setState({
          rate: this.state.win / (this.state.win + this.state.lose) * 100
        })
      }
    }, 100);
  }

  increment = () => {
    this.setState({
      win: this.state.win + 1,
      total: this.state.total + 1,
    });
    
  }
  decresement = () => {
    this.setState({
      lose: this.state.lose + 1,
      total: this.state.total - 1,
    })
  }

  render() {

    return (
      <Box>
        <Table>
          <WinLose>
          <Win>
            승리:
           <WinPoint>
              {this.state.win}승
          </WinPoint>
          </Win>
          <Lose>
            패배:
           <LosePoint>
              {this.state.lose}패
          </LosePoint>
            </Lose>
          </WinLose>
          
          <Total>
          총점:
            {this.state.total}
          </Total>
          <Rate>
            승률: {this.state.rate.toFixed(2)}%
               
          </Rate>
        </Table>
        <Button1 onClick={this.increment}>
          승리
    </Button1>
    
        <Button2 onClick={this.decresement}>
          패배
    </Button2>
      </Box>
    );
  }
}


