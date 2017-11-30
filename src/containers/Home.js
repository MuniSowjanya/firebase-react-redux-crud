import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className='welcomeContainer'>
        <div className='container mainContainer'>
           <section className='welcome'>
            <div className='content col-md-6 col-sm-12'>
              <h1 className='white'>Welcome to React<br />Admin Dashboard</h1>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
