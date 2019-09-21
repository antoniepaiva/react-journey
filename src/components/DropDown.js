import React, { Component } from 'react'

export class DropDown extends Component {


    constructor(props){

        super(props);
    }

    handleOnChange =(event) =>
    {
        console.log('Inside handle on change component')
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }
    render() { 
        console.log('inside component render method')
        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map((data) =>
                <option 
                    key={data.id}
                    value={data.id}
                >
                    {data.name}
                </option>
            );
        return (
            <select name="customSearch" className="custom-search-select" onChange={this.handleOnChange}>
                <option>Select Topic Name</option>
                {options}
           </select>
        )
    }
}

export default DropDown
