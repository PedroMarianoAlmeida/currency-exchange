import React from 'react';

class About extends React.Component {
    render(){
        return(
            <div className='m-2'>
                <h1 className='mt-5'>About</h1>   
                <p> This website is a Practical Exercise from Full-stack Web Development program of Altcademy. </p>
                <p> There is a 100% online bootcamp self-passed with majority of content in text. </p>
                <p> In each module have a bunch of exercises to memorize all the content learning. </p>
                <p> If you want to know more, <a href='https://www.altcademy.com/' target='_blank'>click here</a>.</p>
            </div>
        )
    }
}

export default About