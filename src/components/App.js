import React from 'react';
/*import '../App.css';*/
import {filmsData} from "../filmsData";

console.log(filmsData);

class App extends React.Component {
    state = {
        films: filmsData
    };

    render() {
        console.log(this);

        return (
            <div>
                {this.state.films.map(function (film) {
                    return (
                        <div><p>{film.title}</p>
                            < button onClick={function(){
                                console.log(film.id)
                            }}> delete films</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default App;
