import React from 'react'
import {connect} from 'react-redux';
import { addorder, resetTablenumber, resetfilter } from '../Action';



const Card = ({filter_name,addorder,table_number}) => {
    console.log(filter_name,addorder,table_number);
     const[data,setData]=React.useState([]);
    const [cloneData,SetCloneData]=React.useState([]);
    React.useEffect(()=>{
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json').then(
           response=>response.json()
        ).then(
            json=>{
                setData(json.items);
                SetCloneData(json.items);
            }
        )
        
    },[])
    React.useEffect(()=>{
        if(filter_name!=="All Items"){
            let specific=cloneData.filter(item=>item.category===filter_name);
            setData(specific);
        }
        else{
            setData(cloneData);
        }
    },[filter_name]);

const Handler= async(id,name,prize)=>{ 
    if(table_number!==null){
        await addorder(id,name,prize,table_number)
       
        await resetTablenumber
        await resetfilter
       alert("Order Place Successfully")
    }
    else{
        alert('please select the table number')
    }

}
  return (
    <div>
        <center>
            {data.length >0 ?
            <div className='container'>
                <div className='row'>
                    {data.map((item)=>(
                       <div className='col-md-4' style={{padding:"5px"}} key={item.id}>
                       <div className='card' style={{width:"18rem",padding:"3px"}}>
                       <img src={item.url} alt=" " className='card-img-top'/>
                        <div className='card-body'></div>
                        <h5 className='card-title'>{item.name}</h5>
                        <div className='card-text'>Rs.{item.prize}</div>
                        <button className='btn btn-sm btn-primary' onClick={(e)=>Handler(item.id,item.name,item.prize)}>Order</button>
                       </div>
                       </div> 
                    ))}
                </div>

            </div>
            :
            <div className='spinner-border text-primary'>

            </div>
            }
        </center>
    </div>
  )
}
const mapStateToProps=state=>({
    filter_name:state.filterreducer.filter_name,
    table_number:state.tablereducer.table_number,
    
})

export default connect(mapStateToProps,{addorder})(Card);