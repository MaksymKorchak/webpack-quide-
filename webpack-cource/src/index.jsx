import * as $ from 'jquery';
import Post from '@models/Post';
import './styles/styles.css';
import json from './assets/json';
import WebpackLogo from './assets/webpack-logo';
import xml from './assets/data.xml';
import csv from './assets/data.csv';
import './styles/less.less';
import './styles/scss.scss';
import './babel';
import React from 'react';
import { render } from 'react-dom';

const post = new Post('Webpack Post Title', WebpackLogo);

// $('pre').addClass('code').html(post.toString());


const App = () => (
    <div className="container">
        <h1>Webpack Course</h1>
        <hr />
        <div className="logo" />
        <hr />
        <pre />
        <div className="box">
            <h2>Less</h2>
        </div>
        <div className="card">
            <h2>Scss</h2>
        </div>
    </div>
)
render(<App />, document.getElementById('app'));
