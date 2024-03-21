// https://learn.habilelabs.io/what-are-component-lifecycle-methods-in-react-js-5269aaa37046

import React from "react"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"
import user from "./images/user.png"

export default class Profile extends React.Component {

    constructor () {
        super()
        this.state = {
            contact: {
                firstName: "John",
                lastName: "Doe",
                phone: "+1 (719) 555-1212",
                email: "itsmyrealname@example.com",
                isFavorite: false
            }
        }
        this.toggleFavorite = this.toggleFavorite.bind(this)
    }


    
    toggleFavorite() {
        this.setState( prev => {
            prev.contact.isFavorite = !prev.contact.isFavorite
            return prev
        })
    }
    
    render () {
        
        const starIcon = this.state.contact.isFavorite ? starFilled : starEmpty

        return (
            <main>
                <article className="card">
                    <img src={user} className="card--image" />
                    <div className="card--info">
                        <img 
                            src={starIcon} 
                            className="card--favorite"
                            onClick={this.toggleFavorite}
                        />
                        <h2 className="card--name">
                            {this.state.contact.firstName} {this.state.contact.lastName}
                        </h2>
                        <p className="card--contact">{this.state.contact.phone}</p>
                        <p className="card--contact">{this.state.contact.email}</p>
                    </div>
                    
                </article>
            </main>
        )
    }
}
