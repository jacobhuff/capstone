import React, {Component} from 'react'
import Player from "../components/Videoplayer"
import Cards from '../components/Cards';
import FooterHome from '../components/FooterHome'

export default class HomePage extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        document.getElementsByClassName('nav')[0].classList.add('make-transparent');
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        document.getElementsByClassName('nav')[0].classList.remove('make-transparent');
    }

    handleScroll = e => {
        if (document.documentElement.scrollTop > 50) {
            document.getElementsByClassName('nav')[0].classList.add('affix');
            document.getElementsByClassName('nav')[0].classList.remove('make-transparent');
        } else {
            document.getElementsByClassName('nav')[0].classList.remove('affix');
            document.getElementsByClassName('nav')[0].classList.add('make-transparent');
        }
    }
    render() {
        return (
            <div onScroll={ this.handleScroll }>
                <section className="home">
                </section>

                <div>
                    <h2 className="myH2">Welcome to Cincinnati, Ohio!!</h2>
                    <p className="myP"> 
                        Settled in 1788, the city is located at the northern side of the confluence of the Licking and Ohio rivers, the latter of which marks the state line with Kentucky. 
                        The city is the economic and cultural hub of the Cincinnati metropolitan area, the fastest growing economic power in the Midwestern United States based on increase of economic output,
                        which had a population of 2,190,209 as of the 2018 census estimates. The Over-the-Rhine district is known for its 19th-century architecture, including Findlay Market, which has food and craft vendors. 
                        To the north is the Cincinnati Zoo & Botanical Garden. The Cincinnati Museum Center encompasses history, science and children's museums in the art deco Union Terminal.
                         Works spanning 6,000 years are on display at the Cincinnati Art Museum. Cincinnati is home to three major sports teams: the Cincinnati Reds of Major League Baseball; the Cincinnati Bengals of the National Football League; and FC Cincinnati of Major League Soccer. 
                         The city's largest institution of higher education, the University of Cincinnati.
                    </p>
                </div>

                <Cards />
                <Player/>

                <FooterHome />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
                <script src="js/scripts.js"></script>
            </div>
        )
    }
}