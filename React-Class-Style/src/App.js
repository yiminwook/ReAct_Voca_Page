import React, { Component, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [init, setInit] = useState(1);
  const [date, setDate] = useState((new Date()).toString());
  const [funcShow, setFuncShow] =  useState(true);
  const [classShow, setClassShow] =  useState(true);

  return (
    <div className="container">
      <h1>hello</h1>
      <div className='grid'>
        <input type="button" value="remove func" onClick={() => setFuncShow(funcShow ? false : true)} />
        <input type="button" value="remove class" onClick={() => setClassShow(classShow ? false : true)} />
        {funcShow
        ? <FuncComp 
            init={init} 
            setInit={setInit} 
            date={date}
            setDate={setDate}
          />
        : null}
        {classShow
        ? <ClassComp 
            init={init}
            date={date}
          />
        : null}
      </div>
    </div>
  );
}

var funcStyle = 'color: blue';
var funcId = 0;
function FuncComp({ init, setInit, date, setDate }) {
  
  useEffect(()=> { 
    console.log('%cfunc => useEffect 1회만 실행(componentDidMount)'+(++funcId), funcStyle);
    document.title = init + ' : ' + date;
    return () => { //clean up
      console.log('%cfunc => useEffect return 1회만실행(componentWillUnMount)'+(++funcId), funcStyle);
    }
  }, []);

  //side Effect
  useEffect(()=> { 
    console.log('%cfunc => useEffect number(componentDidMount & DidUpdate)'+(++funcId), funcStyle);
    document.title = init + ' : ' + date;
    return () => { //clean up
      console.log('%cfunc => useEffect return number'+(++funcId), funcStyle);
    }
  }, [init]); //number가 바뀔때만 실행

  useEffect(()=> { 
    console.log('%cfunc => useEffect date(componentDidMount & DidUpdate)'+(++funcId), funcStyle);
    document.title = init + ' : ' + date;
    return () => { //clean up
      console.log('%cfunc => useEffect return date'+(++funcId), funcStyle);
    }
  }, [date]); //dater가 바뀔때만 실행

  console.log('%cfunc => render'+(++funcId), funcStyle);
  return (
   <div>
    <h2>function style</h2>
    <p>Number: {init}</p>
    <p>Date: {date}</p>
    <input 
      type="button" 
      value="random" 
      onClick={() => setInit(Math.random())}
    ></input>
    <input 
      type="button" 
      value="date" 
      onClick={() => setDate((new Date()).toString())}
    ></input> 
   </div> 
  );
}

class ClassComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: this.props.init,
      date: this.props.date
    };
  }

  // componentWillMount() { //render전에 실행
  //   console.log("class => WillMount");
  // }

  shouldComponentUpdate(a,b,c){
    console.log("class => ShouldUpdate");
    return true;
  }

  componentWillUpdate(preProps, prevState){ //render전에 실행
    console.log("Class => DidUpdate");
    // if (prevState.number !== preProps.init) {
    //   console.log("DidUpdate", preProps.init)
    //   this.setState({number: preProps.init})
    // }
    if (prevState.date !== preProps.date) {
      console.log("Class => DidUpdate", preProps.date)
      this.setState({date: preProps.date})
    }  
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h2>class style</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input 
          type="button"
          value="random"
          onClick={function (){
            this.setState({ number: Math.random() });
          }.bind(this)}
        />
        <input type="button" value="date" 
          onClick={
            ()=> this.setState({date: (new Date()).toString()})
          } 
        />
      </div>
    );
  }

  componentDidMount() {
    console.log("class => DidMount");
  }
  componentDidUpdate(){
    console.log("Class => DidUpdate");
  }
  componentWillUnmount() {
    console.log("Class => UnMount")
  }
}

export default App;
