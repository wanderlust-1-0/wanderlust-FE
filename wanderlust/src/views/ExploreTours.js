import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTours } from '../actions';

class ExploreTours extends Component {

  componentDidMount() {
    const tours = this.props.getAllTours();
    console.log('These are all the tours: ', tours);
  }

  render() {
    return (
      <div>
        <header style={{ display: 'flex', marginTop: '30px' }}>
          <h1>Wanderlust</h1>
          <nav style={{ display: 'flex', height: '25px' }}>
            <div style={{ display: 'flex' }}>
              <a href='#'>Popular</a>
              <a href='#'>Deals</a>
              <a href='#'>Catagories</a>
            </div>
            <div style={{ display: 'flex' }}>
              <a href='#'>Search Icon</a>
              <a href='#'>Tourist Name</a>
            </div>
          </nav>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: '100px',
            }}>
            <h2>Zion National Park</h2>
            <button>View Tours</button>
          </div>
        </header>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px',
          }}>
          <input type='text' />
          <button>Search</button>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '75%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '100px auto',
          }}>
          <div
            style={{
              height: '200px',
              width: '200px',
              border: '1px solid black',
              margin: '10px',
            }}
          />
          <div
            style={{
              height: '200px',
              width: '200px',
              border: '1px solid black',
              margin: '10px',
            }}
          />
          <div
            style={{
              height: '200px',
              width: '200px',
              border: '1px solid black',
              margin: '10px',
            }}
          />
          <div
            style={{
              height: '200px',
              width: '200px',
              border: '1px solid black',
              margin: '10px',
            }}
          />
          <div
            style={{
              height: '200px',
              width: '200px',
              border: '1px solid black',
              margin: '10px',
            }}
          />
          <div
            style={{
              height: '200px',
              width: '200px',
              border: '1px solid black',
              margin: '10px',
            }}
          />
          <div
            style={{
              height: '200px',
              width: '200px',
              border: '1px solid black',
              margin: '10px',
            }}
          />
          <div
            style={{
              height: '200px',
              width: '200px',
              border: '1px solid black',
              margin: '10px',
            }}
          />
          <div
            style={{
              height: '200px',
              width: '200px',
              border: '1px solid black',
              margin: '10px',
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    allTours: state.tours
  }
}

export default connect(mapStateToProps, { getAllTours })(ExploreTours)
