import React from "react";

const RecipeItem =(props)=>{
    const {name,image,ingredientLines,key}=props;
    return (
        <div key={key} className="col-md-3">
                 <div className="card py-2 text-center">
                  <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
                   <div className="card-body">
                     <h5>{name}</h5>
                   </div>
                   <ul className="list-group list-group-flush">
                    {ingredientLines.map(ingredient =>(
                      <li className="list-group-item" >{ingredient}</li>
                    ))}
                   </ul>
                 </div>
               </div>
    );
};

export default RecipeItem;