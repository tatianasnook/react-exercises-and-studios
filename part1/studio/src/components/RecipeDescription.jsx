import React from 'react';
import RecipeAuthor from './Description';

class RecipeDescription extends React.Component {
  render(){
    return(
      <div> 
        <div>
          <h1>Fettuccine with Cherry Tomato Butter Sauce</h1>
          <p>There is nothing simpler than fettuccine with cherry tomato butter sauce.  
            Bright cherry tomatoes are sauteed in butter with chopped onion, 
            tossed with al dente fettuccine, and finished with fresh parsley and basil.  
            Perfect for weeknights or when you’re short on time but don’t want to compromise
             on flavor.
          </p>
      </div>
      <RecipeAuthor />
</div>
    )
  }
}

export default RecipeDescription;
