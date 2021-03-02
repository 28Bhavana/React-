import React, {Component} from 'react';
import '../components/Service.css';

class Service extends React.Component {
    state = {
      isLoading: true,
      list: [],                
    
    };
  
    fetchlist() {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            list: data,
            isLoading: false,
          })
        )
        
    }
  
    componentDidMount() {
      this.fetchlist();
    }
    render() {
      const { isLoading, list } = this.state;
      return (
        <React.Fragment>
         
          {!isLoading ? (
            list.map(list => {
              const { id,username, name, email, phone} = list;
              return (
                <div className="card" key="id">
                  <p> ID: {id}</p>
                  <p> Username: {username}</p>
                  <p>Name: {name}</p>
                  <p>Email Id: {email}</p>
                  <p>phone : {phone}</p>
                
             
                </div>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </React.Fragment>
      );
    }
  }
  
export default Service;
