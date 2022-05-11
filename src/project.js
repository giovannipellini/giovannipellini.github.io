import { Component } from "react";

class Project extends Component{
    render()
    {
        return (
          
            <div className="card">
            <img src={this.props.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
             
            </div>
          </div>

        )
    }
}

export default Project;