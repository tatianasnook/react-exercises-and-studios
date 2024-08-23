import styles from './Description.module.css';
import React from 'react';

const RecipeAuthor = () => {
  const authorLink = "https://www.sipandfeast.com/fettuccine-cherry-tomato-butter-sauce/";
  const authorPhoto = "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/404908546_840742918057167_8210668609417996119_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=eCdIQC4tldsQ7kNvgF62L2n&_nc_ht=scontent-ord5-1.xx&oh=00_AYAp9dO40G3y7Y-Ai41d8aC-nr5KSYcfv1qe_0pWh95a6g&oe=66CDA37C";
  const authorName = "James C Delmage";

  return (
    <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "picture of the author" className={styles.imageUpdates}/>
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink} target="_blank">Sip and Feast</a> 
      </div>
    </div>
  )
}

export default RecipeAuthor;
