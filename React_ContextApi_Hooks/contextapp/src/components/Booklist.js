import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Booklist extends Component {
    //static contextType = ThemeContext;
    
    render() { 
        
            return (
                <ThemeContext.Consumer>
                    {(context) => {
                        const { islightTheme, light, dark } = context;
                        const theme = islightTheme ? light : dark
                        return (
                            <div className='book-list' style={{background:theme.bg, color:theme.syntax}}>
                                <ul>
                                    <li style={{ background: theme.ui }}>Africa Kills Her Sun</li>
                                    <li style={{ background: theme.ui }}>The way of the Wind</li>
                                    <li style={{ background: theme.ui }}>The river between</li>
                                </ul>
                            </div>
                        )
                    }}
                </ThemeContext.Consumer>

               );
        /* const { islightTheme, light, dark } = this.context;
        const theme = islightTheme ? light : dark
        return (
            <div className='book-list' style={{background:theme.bg, color:theme.syntax}}>
                <ul>
                    <li style={{ background: theme.ui }}>Africa Kills Her Sun</li>
                    <li style={{ background: theme.ui }}>The way of the Wind</li>
                    <li style={{ background: theme.ui }}>The river between</li>
                </ul>
            </div>
        ); */
    }
}
 
export default Booklist;