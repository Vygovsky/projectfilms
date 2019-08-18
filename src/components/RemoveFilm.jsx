import React from 'react';

class RemoveFilm extends React.Component {
    state = {
        willWatch: false

    };

    render() {
        const {film, removeFilm, addFilmWillWatch, removeFilmFromWillWatch} = this.props;
        return (
            <div className="card">
                <img className="card-img-top"
                     src={`https://image.tmdb.org/t/p/w500${film.backdrop_path || film.poster_path}`}
                     alt=""/>
                <div className="card-body">
                    <h6 className="card-title">{film.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {film.vote_average}</p>
                        {this.state.willWatch === true ?
                            (<button type="button" className="btn btn-success" onClick={()=>{
                                this.setState({
                                    willWatch:false
                                });
                                    removeFilmFromWillWatch(film)
                                }}>
                                 RemoveWill Watch
                            </button>
                            ):(
                                <button type="button" className="btn btn-secondary"
                                        onClick={()=>{
                                            this.setState({
                                                willWatch:true
                                            })
                                        addFilmWillWatch(film)}}>
                                Add Will Watch
                            </button>)
                        }

                    </div>
                    <button onClick={removeFilm.bind(this, film)}>Delete film</button>
                </div>
            </div>
        )
    }
}

export default RemoveFilm;
