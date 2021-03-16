import axios from 'axios'
import React, { Component } from 'react'

class dogpictures extends Component {
    constructor(props) {
        super(props);
        this.state = {
        doggy: ""
    }
    this.getDog = this.getDog.bind(this)      
    // componentDidMount() {
    //     axios.get('https://api.jokes.one/jod')
    //     .then (res => {
    //         const joke = res.data.contents.jokes[0].joke.text
    //         this.setState({joke})
    //     })
    // }
    }

    getDog(event) {
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            //console.log(res)
            const doggy = res.data.message
            this.setState({doggy: doggy})
            //event.preventDefault();
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.getDog()}>Click Me</button>
                <img src={this.state.doggy} alt="a good boy"/>
            </div>
        )
    }
}

export default dogpictures


