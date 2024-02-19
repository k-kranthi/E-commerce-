import React from 'react'
import { connect } from 'react-redux';
import { setfilter } from '../Action';
import { resetfilter } from '../Action';

const Filter = ({filter_name,setfilter,resetfilter}) => {
    const prod=["All Items","Rice Items","Pizza","Cold Drinks","Hot Drinks"];
    const [filter,setFilter]=React.useState("All Items");
  return (
    <div>
        <center>
            <span className='h4'>Filter:</span>
            <select name='filter'className='p-1 m-3' onChange={(e)=>setfilter(e.target.value)}>
                {prod.map((item,index)=>(
                    <option value={item} key={index}>{item}</option>
                ))}
            </select> 
                    
        </center>
    </div>
  )
}

const mapStateToProps=state=>({
    filter_name:state.filterreducer.filter_name
})

export default connect(mapStateToProps,{setfilter,resetfilter})(Filter)