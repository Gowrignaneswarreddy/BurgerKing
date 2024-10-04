import React from 'react';
class App extends React.Component{
  render(){
    return(
      <>
        <ul id="GG">
          <li id="GG1"><i className="fa-solid fa-bars"></i></li>
          <li id="GG2"><h1>BURGER KING</h1></li>
          <li id="GG3"><i className="fa-solid fa-user"></i></li>
          <li id="GG4"><button id="cart"><i className="fa-solid fa-bag-shopping"></i> View Cart</button></li>
        </ul>
      </>
    )
  }
}
export default App;