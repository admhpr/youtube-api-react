import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = { term : ""};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    render(){
        return(
            <div>
                <input
                    value={this.state.term}
                    onChange={this.handleOnChange}
                />
            </div>
        )
    }
    handleOnChange(event){
        this.setState({ term: event.target.value });
    }
}

export default SearchBar;