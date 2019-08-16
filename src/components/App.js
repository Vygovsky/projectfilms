import React from 'react';
import {filmsData} from "../filmsData";

import RemoveFilm from "./RemoveFilm";

console.log(filmsData);


class App extends React.Component {
    state = {
        films: filmsData,
        filmWillWatch: []
    };

    removeFilm = film => {
        const updateFilms = this.state.films.filter(function (item) {
            return item.id !== film.id;
        });
        console.log(updateFilms);
        this.setState({
                films: updateFilms,

            }
        )
    };

    addFilmWillWatch = film => {
        console.log(1);
      /*  const updateWillWatch = [...this.state.filmWillWatch];
        updateWillWatch.push(film);*/
        const updateWillWatch = [...this.state.filmWillWatch, film];
        this.setState({
            filmWillWatch: updateWillWatch
        });
    };

    render() {
        console.log("render", this.state, this);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {this.state.films.map(film => {
                                return (
                                    <div className="col-6 mb-4" key={film.id}>
                                        <RemoveFilm film={film}
                                                    removeFilm={this.removeFilm}
                                                    addFilmWillWatch={this.addFilmWillWatch}/>,</div>);
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <p>Will watch: {this.state.filmWillWatch.length} films </p>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
