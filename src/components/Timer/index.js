import "../../assets/css/style.css"
import React from 'react';
import Moment from 'react-moment';


//uses Class components
export default class MyComponent extends React.Component {
    render() {
        const a = <div className='allcenter'> <h2> Current Date & Time </h2> </div> ; 
        const x = <Moment className='allcenter' interval={250} format="MMMM Do YYYY" >
                </Moment>
        const y = <Moment className='allcenter' interval={250} format="h:mm:ss a" >
                 </Moment>
        
        return (
           <div>
                 {a}
                 {x}
                 {y}
            
           </div>
           
        );
    }
}