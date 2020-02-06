import React, {Component} from 'react';
import Top from './Components/Top'
import Message from './Components/Messages'
import Input from './Components/Input'
import Grid from '@material-ui/core/Grid';


class App extends Component {

  state = {
    messages :[
      {
        id: 1,
        text: "hello"
      },
    ]
  }

  getText = (e) => {
    e.preventDefault()
    var text = document.getElementById('outlined-basic').value
    const newMessage = {
      text: text,
      id: 2
    }
    this.setState({ messages: [...this.state.messages, newMessage] })
    
}

  render(){
  return (
    <div className="App">
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
      <Top />
      <Message messages={this.state.messages} />
      <Input getText={this.getText} />
      </Grid>
       </Grid> 
    </div>
  );
}
}

export default App;
