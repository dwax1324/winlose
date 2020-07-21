import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 10px 2px 2px 2px;
  text-align:center;
  width: 30px;
  width: 30px;
  opacity:0.5;
  transition: all 0.3s;
  :hover{
    opacity:1; 
  }
  background-color:transparent;
  font-size:15px;
  border-radius:10px;
  outline:none;
  cursor:pointer;
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
  user-select:none;
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

const WinBox = styled.div`

  height: 70px;
  width: 100px;
  display: flex;
  justify-content:center;
  align-items: center;
  background-color: blue;
  flex-direction:column;
  margin: 10px;
  font-family:cursive;
  border-radius:10px;
  user-select:none;
  
`
const LoseBox = styled.div`

  height: 70px;
  width: 100px;
  display: flex;
  justify-content:center;
  align-items: center;
  background-color: red;
  flex-direction:column;
  margin: 10px;
  font-family:cursive;
  border-radius:10px;
  user-select:none;

`

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      win: 0,
      lose: 0,
      total: 0,
      rate: 0,
      return: -1
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

 winIncrement = () => {
    this.setState({
      win: this.state.win + 1,
      total: this.state.total + 1,
    });
   
    
  }
  winDecresement = () => {
    if (this.state.win === 0) {
      alert("0승 이하는 불가능합니다.");
    } else {
      this.setState({
        win: this.state.win - 1,
        total: this.state.total - 1,
      })
    }
  }

   loseIncrement = () => {
    this.setState({
      lose: this.state.lose + 1,
      total: this.state.total - 1,
    });
    
  }
  loseDecresement = () => {
    if (this.state.lose === 0) {
      alert("0패 이하는 불가능합니다.");
    } else {
      this.setState({
      
        lose: this.state.lose - 1,
        total: this.state.total + 1,
      })
    }
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
            승률: {this.state.rate.toFixed(1)}%
               
          </Rate>
        </Table>
        <WinBox>
            승리
            <div>
          <Button onClick={this.winIncrement}>
            +
          </Button>
          <Button onClick={this.winDecresement}>
            -
          </Button>
          </div>
        </WinBox>

        <LoseBox>
          패배
           <div>
          <Button onClick={this.loseIncrement}>
            +
          </Button>
          <Button onClick={this.loseDecresement}>
            -
          </Button>
        </div>
        </LoseBox>
      </Box>
    );
  }
}


