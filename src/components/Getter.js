import React from 'react';

export default class extends React.Component {

    get a() {
        return <div>AAA</div>
    }
    b() {
        return <div>BBB</div>
    }
    c =()=>(
        <div>CCC</div>
    )

    render() {
        return (
            <div>
                <button> Buton-1 </button>
                {this.a}
                {this.b()}
                {this.c()}
            </div>
        )
    }

}