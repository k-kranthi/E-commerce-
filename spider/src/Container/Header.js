import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (count) => {
  return (
    <div>
      <Header/>
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand'>Restuarant</a>
            <button className='btn btn-primary'>
                <Link to='/orders'style={{color:"white",textDecoration:"none"}}>Orders</Link><span className='badge bg-secondary'></span>
                </button>
        </nav>
    </div>
  )
}
const mapStateToProps=state=>({
  count:state.orderreducer.lenght
})

export default connect(mapStateToProps)(Header);