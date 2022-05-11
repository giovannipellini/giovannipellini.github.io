import { Component } from "react";
//import listReactFiles from 'list-react-files';

class Tech extends Component {


    render() {
        //listReactFiles("./img/Icon/").then(files => console.log(files));
        let imgPath = "";


        if (this.props.title.includes('Emgu')) imgPath = "./img/Icon/Emgu.png"
        if (this.props.title.includes('FireBase')) imgPath = "./img/Icon/FireBase.jpg"
        if (this.props.title.includes('Json')) imgPath = "./img/Icon/JSON.net.png"
        if (this.props.title.includes('OpenCV')) imgPath = "./img/Icon/OpenCV.png"
        if (this.props.title.includes('Oracle')) imgPath = "./img/Icon/Oracle.png"
        if (this.props.title.includes('React')) imgPath = "./img/Icon/React-icon.svg"
        if (this.props.title.includes('SQL Server')) imgPath = "./img/Icon/SQL Server.png"
        if (this.props.title.includes('VB.NET')) imgPath = "./img/Icon/VB.png"
        if (this.props.title.includes('Visual Studio')) imgPath = "./img/Icon/Vs.jpg"
        if (this.props.title.includes('Visual Studio Code')) imgPath = "./img/Icon/VsCode.jpg"
        if (this.props.title.includes('C#')) imgPath = "./img/Icon/c-sharp.png"
        if (this.props.title.includes('Bootstrap')) imgPath = "./img/Icon/BootStrap.jpg"

        if (imgPath.length > 0)
            return (

                <img style={{ height: '4rem', width: 'auto' }} src={imgPath} alt={this.props.title} />
            )
        else
            return (

                <span className="badge bg-info">{this.props.title}</span>
            )
    }

}

export default Tech;
