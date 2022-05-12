import { Component } from "react";
import Feature from "./feature";
import Tech from "./tech";

class Project extends Component {
  render() {
    return (
      <div className="col col-xxl-4 col-lg-6 col-sm-12 ">
        <div className="card">
          <h3 className="card-header">{this.props.title}</h3>
          <img src={this.props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{this.props.description}</p>




            {
              this.props.features.map(
                feature => {
                  return (


                    <Feature key={feature.id} title={feature.title} />

                  )
                }
              )
            }


          </div>



          <div className="container row justify-content-md-left">
            {
              this.props.tech.map(
                tec => {
                  return (

                    <Tech key={tec.id} title={tec.title} />

                  )
                }
              )
            }
          </div>


          <div className="card-body">

          </div>
        </div>
      </div>
    )
  }
}

export default Project;