import React from 'react';

class Dashboard extends React.Component {

  render()  {
    return (
      <div className='fluid-container'>
        <div className='row'>
          <div className='main col-md-10'>
            <div className='fluid-container'>
              <p>Yay you logged in!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
