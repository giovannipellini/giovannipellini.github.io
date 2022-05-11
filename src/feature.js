import { Component } from "react";

class Feature extends Component {
    render()
    {
        return(
            <span className="list-group-item">{this.props.title}</span>
        )
    }
  
}

 export default Feature;
  