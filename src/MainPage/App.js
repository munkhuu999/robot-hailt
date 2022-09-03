import React, {Component}from 'react';
import CardList from '../components/card-list';
import css from './style.module.css'
import axios from 'axios';
import SearchBox from '../components/SearchBox';

class App extends Component {
 constructor(){
   super();
   this.state={
     course: [],
     searchFields: ''
   };
 }
 componentDidMount(){
 axios.get("https://jsonplaceholder.typicode.com/users")
 .then( result => {
   this.setState({course: result.data});
   })
 .catch(err => console.log(err));
 }
  SearchChanged = event =>{
      this.setState({searchFields:event.target.value});      
  };
  render(){   
    const {course, searchFields} = this.state;
    let searchResult = course.filter(el => el.name.toLowerCase().includes(searchFields));
       return (
      <div className={css.App}>
          <h1>1234.mn Бүх Сургалтууд</h1>
          <SearchBox onSearch={this.SearchChanged} />
          <CardList data = {searchResult}/>
      </div>
    );

  }
 
}

export default App;
