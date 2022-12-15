import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-white">
                <a className="navbar-brand" href="#">
                <img src="https://srisovki.one/wp-content/uploads/2021/09/Anime-devushki-krasivye-dlya-srisovki-podborka011.jpg" width="60" height="60" alt=""/>So cringe react
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header
