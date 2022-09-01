import { Component, useState } from 'react';
import Plan from './Plan'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



/*function App() {
  return (
    <div className="App">
      <h1>My Plans today</h1>
    </div>
  );
} 
export default App;*/
 class App extends Component{
  state={
    item:[],
    text:""
  }
  handleChnage=e=>{
    this.setState({text:e.target.value})
  }
  handleAdd=e=>{
    if(this.state.text!==" "){
    const item=[...this.state.item,this.state.text];
    this.setState({item:item,text:""})
  }}
  handleDelete=id=>{
    console.log(" Deleted", id)
    
    const olditems=[...this.state.item]
    const newItems=olditems.filter((element,i)=>{
      return i!==id
    })
    console.log("Old Items",olditems)
    this.setState({item:newItems})
    console.log("new items",newItems)
  }
  render(){
    return (
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
            <h1 className='text-center'>My Plans today</h1>
            <div className='row'>
              <div className='col-9'>
              <input type="text" className='form-control' placeholder='Write your plan here' value={this.state.text} 
              onChange={this.handleChnage}/>
                </div>
                <div className='col-2'>
                  <button className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd}>Add</button>
                </div>
                <div className='container-fluid'>
                  <ul className="list-unstyled row m-5">
                   {this.state.item.map((value,i)=>{
                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete}/>

                    })
                    
                    
                    }
                    
                    
                  </ul>
                </div>
            
            </div>

            

          </div>
        </div>

      </div>
    )
  }
} 
export default App;