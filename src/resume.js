import React from 'react'

function Resume() {
  return (
    <div className='container'>

      <table>
        <tr>
          <td></td><td className='text-center'>EN</td><td className='text-center'>IT</td>
        </tr>
        <tr>
          <td>Download</td>
          <td><a href='/resume/Resume-EN.pdf'><img src='/img/Icon/PDF_icon.svg' height={30} width={30} alt='Resume EN'></img></a></td>
          <td><a href='/resume/Resume-IT.pdf'><img src='/img/Icon/PDF_icon.svg' height={30} width={30} alt='Resume IT'></img></a></td>
        </tr>

      </table>
      <hr />
      <h6>PROFESSIONAL EXPERIENCE</h6>
      <h3>Senior Analyst/Developer .NET and JAVA</h3>
      <small>01/01/2011–present</small>
      <h6>HRM Informatica (till 09/2020) – Cattolica Assicurazioni (from 09/2020), Verona (Italia).</h6>
      <ul>
        <li>Application maintenance and development of two Web applications in Cattolica Assicurazioni for  Life insurance using this technologies:</li>
        <ul>
          <li>VB.NET 2019 (Framework 4.7) FrontEnd with SQL Server hosted on IIS 11</li>
          <li>Java 7 FrontEnd and Backend (JBOSS 7.1) and Oracle 11 DataBase</li>
        </ul>

        <li>Design and development of a tool to simplify and speedup the common tasks required in the job. This tool is built with VB.NET 2019 and Bootstrap 4 framework, it uses a SQL server DB to store its data. The features of this application includes:
          <ul>
            <li>Enquiring several Oracle and SQL databases</li>
            <li>Consistent copy of single or multiple entities between DBs</li>
            <li>Inspecting online applications to detect downtimes</li>
            <li>Batch process to detect possible application failures</li>
            <li>Online WS testing using Reflection</li>
          </ul>
        </li>
        <li>Design and development of an Angular FrontEnd and Java 11 BackEnd with Spring Boot 2 to manage web service failure.</li>
      </ul>
      <h3>C# Developer</h3>
      <small>01/01/2010–31/12/2010</small>
      <h6>GlaxoSmithKline, Verona (Italia)</h6>
      <ul>
        <li>Application  maintenance and development for a Web application of GSK (farmaceutical multinational).</li>
      </ul>
      <h3>VB6 and .NET Developer</h3>
      <small>01/03/2009–31/12/2009</small>
      <h6>Lynx S.p.A., Padova (Italia)</h6>
      <ul>
        <li>Application  maintenance and development for the FrontEnd application of SanPaolo Bank.</li>
      </ul>
      <h6>EDUCATION</h6>
      <h3>Master’s Degree in Computer Engineering</h3>
      <small>01/09/2001–25/10/2008</small>
      <p>Alma Mater Studiorum – Università di Bologna, Bologna (Italia)</p>
      <ul>
        <li>design and development of a three-dimensional scanner from stereoscopic views</li>
        <li>design and development of an infrastructure to support real-time applications distribuiton</li>
        <li>design and development of an application for the industrial inspection of mechanical parts using artificial vision</li>
      </ul>
      <h6>PROFESSIONAL SKILLS</h6>
      <h3>Development</h3>
      <ul>
        <li>Microsoft .NET C# and VB.NET, Java EE Spring, Python</li>
        <li>Angular, React</li>
        <li>Automation test: NUnit, Cypress</li>
        <li>PL-SQL: MS SQL Server and Oracle</li>
        <li>JS, jQuery, AJAX</li>
        <li>JAX-WS, JAX-RS</li>
        <li>HTML, CSS, Bootstrap</li>
      </ul>
      <h3>Software</h3>
      <ul>
        <li>IDE: Visual Studio .NET, VS Code, Eclipse</li>
        <li>DB IDE: SQL Developer, SQLdbx, SQL Server Management Studio</li>
        <li>Image retouch: Adobe Photoshop, GIMP, Paint.NET</li>
        <li>Audio/Video editing: Audacity, DaVinci Resolve, Pinnacle Studio</li>
        <li>3D modeling and rendering: Blender, 3D Studio</li>
        <li>Microsoft Office: Word, Excel, Access, PowerPoint</li>
      </ul>
    </div>
  )
}

export default Resume