import React from 'react'
import './Table.css'

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {tableOf: 1}

    }



    renderCell = (tableOf, number) => {
        return (
           
            <div className='row'>
                <table className='cell-button'>{tableOf}</table>
                <text className='multi'>{" x "}</text>
                <table className='cell-button'>{number}</table>
                <text className='multi'>{" = "}</text>
                <table className='cell-button'>{tableOf * number}</table>
            </div>
           
        );
    };

    renderTable = () => {
        let i = 1;
        let array = [];

        while (i <= 10) {
            array.push(this.renderCell(this.state.tableOf,i));

            i++
        }
        return array;
    }

    renderTableOf = () => {
      let  i = 1;
      let  array = [];

        while (i <= 10) {
            let index = i;
            // defining ui
            let ui = (
                <button className="cell-button"
                    style={{ backgroundColor: "lightblue", fontSize: "20px" }}
                    onClick={() => {
                         this.buttonClick(index);
                          }}
                          >
                    {index}

                </button>
            );

            // ADDING UI TO ARRAY
            array.push(ui);
            // LOOP INDEX
            i++
        };

        return <div className="row">{array}</div>
    };

    buttonClick=(index)=>{
        console.log("index==", index);
        this.setState({tableOf:index});
    }

    render() {
        return (
        <div className='table'>
            {this.renderTableOf()}
            {this.renderTable()}
        </div>
        )
    };


}
export default Table;