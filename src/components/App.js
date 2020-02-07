import React from 'react'

import Test from './Test'
import Hooks from './Hooks'
import Block from './Block'

export default class App extends React.Component {
    render() {
        return(
            <>
                <h1>My React App</h1>
                <Test />
                <Hooks />
                <Block />
            </>
        )
    }
}