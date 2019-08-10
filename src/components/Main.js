import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <p>Hi, I'm Paul. For the past few years I've been developing websites and apps for major US corporations in telecom, media, and finance.</p>
          <p>Now I want to partner with small businesses, startups, and entrepreneurs on a more personal level. I'm here to help you solve your web development problems.</p>
          <p>I'm also a supporter of privacy, and freedom on the Internet. For everyone.</p>
          {close}
        </article>

        <article id="services" className={`${this.props.article === 'services' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Services</h2>
          <h3>Web Development</h3>
          <p>Landing pages, marketing pages, sales funnels, blogs, and full-site builds. You can also use one of my pre-built templates to get a site up and running quickly.</p>
          <h3>App Development</h3>
          <p>Web applications and custom user interface (UI) components built to fit your specific business needs.</p>
          <h3>Web Design</h3>
          <p>If a templated site doesn't work for you then I can do a fully custom site. I'll handle the entire process from requirements gathering to development.</p>
          <h3>Online Privacy Consulting</h3>
          <p>This isn't really even a service. It's just something I'm passionate about.</p>
          <p>So you'll find that by working together I'll recommend ways of protecting yourself online from threats you were probably never aware existed, using techniques and technologies you've probably never even heard of.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <p>Most of my work is covered by NDA. However, I can provide specific work samples on request.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p><a href="mailto:hello@paulgarcia.co" className="icon fa-envelope">hello@paulgarcia.co</a></p>

          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/paulgarcia22" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/gp22" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
