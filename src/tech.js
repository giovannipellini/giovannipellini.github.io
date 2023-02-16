import { Component } from "react";
//import listReactFiles from 'list-react-files';

class Tech extends Component {


    render() {
        //listReactFiles("./img/Icon/").then(files => console.log(files));
        let imgPath = "";


        if (this.props.title.includes('Emgu')) imgPath = "/img/Icon/Emgu.png"
        if (this.props.title.includes('FireBase')) imgPath = "/img/Icon/FireBase.jpg"
        if (this.props.title.includes('Json')) imgPath = "/img/Icon/JSON.net.png"
        if (this.props.title.includes('OpenCV')) imgPath = "/img/Icon/OpenCV.png"
        if (this.props.title.includes('Oracle')) imgPath = "/img/Icon/Oracle.png"
        if (this.props.title.includes('React')) imgPath = "/img/Icon/React-icon.svg"
        if (this.props.title.includes('SQL Server')) imgPath = "/img/Icon/SQL Server.png"
        if (this.props.title.includes('VB.NET')) imgPath = "/img/Icon/VB.png"
        if (this.props.title.includes('Visual Studio')) imgPath = "/img/Icon/Vs.jpg"
        if (this.props.title.includes('Visual Studio Code')) imgPath = "/img/Icon/VsCode.jpg"
        if (this.props.title.includes('C#')) imgPath = "/img/Icon/c-sharp.png"
        if (this.props.title.includes('Bootstrap')) imgPath = "/img/Icon/BootStrap.png"
        if (this.props.title.includes('Github')) imgPath = "/img/Icon/github.svg"
        if (this.props.title.includes('C++')) imgPath = "/img/Icon/Cplusplus.svg"
        if (this.props.title.includes('NUnit')) imgPath = "/img/Icon/NUnit.svg"

        if (this.props.title.includes('Python')) imgPath = "/img/Icon/Python.svg"
        if (this.props.title.includes('Tensorflow')) imgPath = "/img/Icon/Tensorflow.svg"
        if (this.props.title.includes('Google_Colaboratory')) imgPath = "/img/Icon/Google_Colaboratory_SVG_Logo.svg"
        if (this.props.title.includes('Blender')) imgPath = "/img/Icon/blender.svg"

        if (this.props.title.includes('Angular')) imgPath = "/img/Icon/Angular.svg"
        if (this.props.title.includes('Java')) imgPath = "/img/Icon/Java.svg"
        if (this.props.title.includes('Spring')) imgPath = "/img/Icon/Spring.svg"
        if (this.props.title.includes('Cypress')) imgPath = "/img/Icon/Cypress.svg"

        if (this.props.title.includes('Kubernetes')) imgPath = "/img/Icon/kubernetes.svg"
        if (this.props.title.includes('Docker')) imgPath = "/img/Icon/docker.svg"
        if (this.props.title.includes('RabbitMQ')) imgPath = "/img/Icon/rabbitmq-icon.svg"
        
        if (imgPath.length > 0)
            return (
                <>
                    <div className="col col-md-auto">
                        <img style={{ height: '3.5rem', width: 'auto' }} src={imgPath} alt={this.props.title} />
                        {/* <span className="badge bg-dark">{this.props.title}</span> */}
                    </div>
                </>
            )
        else
            return (

                <span className="badge bg-info">{this.props.title}</span>
            )
    }

}

export default Tech;
