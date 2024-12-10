import React from "react"
export default class ClassCounter extends React.Component{
componentDidMount(){}

constructor(props){
    super(props)
    this.state={count:0}
};
    render (){
        return (<div>
 <h2>Class Constructor</h2>


        </div>)
    }
}

class Animal{
    constructor(name){
        this.name=name
    }
    eat(){
        console.log('Eat')
    }
}
class Dog extends Animals{
    constructor(name){
        super(name)
    }
}