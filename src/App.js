import React from "react";
import './components/app.css'
import store from "./components/Button";
import button from "./components/Button";
class App extends React.Component {
constructor() {
    super()
    this.state = {
        out:'0'
    }
    this.refOutput = React.createRef()
}

tapeNumber(value){
let currentValue = value
let output = this.refOutput.current
    this.setState({
    out: currentValue
    })
    if (output.value === '0') {output.value = ''}
    output.value  += currentValue

}

tapeOperation(value){
  let output = this.refOutput.current
}
render() {
    return(
        <div className="container">
            <div className='output'>
                <input ref={this.refOutput} type="text" defaultValue={this.state.out}/>
            </div>
            <div className='Buttons'>
                {store.buttons.map(item => <button
                    onClick={() => {this.tapeNumber(item.val)}}
                >{item.val}</button>)}>

            </div>
        </div>
    )
}

}

export default App