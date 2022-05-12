import { Component } from "react";

class Feature extends Component {
    render()
    {
        if (this.props.title.length > 0)
        return(            
            <li >{this.props.title}</li>
        )
    }
  
}

 export default Feature;
  