import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Menber from './menber'


ReactDOM.render(
    <Family lastName="Castro">
        <Menber name="Jose"/>
        <Menber name="Maria"/>
    </Family>
, document.getElementById('app'))