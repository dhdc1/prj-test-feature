import React from 'react';
import '../css/styles.css'
import Box from './Box'

export default class extends React.Component {

    render() {
        return (
            <div>
                <div className="main">
                    <Box title="xxxxx">ssdsaffsfasfsfdsaf</Box>
                    <Box />
                    <Box onClick={()=>alert('Click...')}/>
                </div>
                <div className="main">
                    <Box />
                    <Box />
                    <Box title="xxxxx">ssdsaffsfasfsfdsaf</Box>
                    <Box />
                </div>

            </div>
        )
    }
}

