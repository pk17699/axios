import React from "react";

const List = ({data,onDelete}) => {
  return (
    
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Course name</th>
          <th scope="col">Course duration</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
        {data.map((item)=>{
          return (<tbody key={item.id}>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.coursename}</td>
              <td>{item.courseduration}</td>
              <td>{item.price}</td>
              <td><button onClick={()=>onDelete(item.id)}>Delete</button></td>
            </tr>
          </tbody>)
        })}
      
    </table>
  );
};

export default List;
