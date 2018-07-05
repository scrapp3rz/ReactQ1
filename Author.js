import React, {Component} from 'react'; 

class Author extends Component{
    fonctionOnClic(){
      alert(this.props.name);
    }
    render(){
      return (<div>
                  <button onClick={this.fonctionOnClic.bind(this)}>
                  cliquez
                  </button>
              </div>);
    }
}
export default Author;


