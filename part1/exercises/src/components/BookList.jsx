import './bookList.css';

export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://m.media-amazon.com/images/I/41Vy1FFcz3L._SY445_SX342_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/5197S28VyHL._SY445_SX342_QL70_FMwebp_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/A1lnhRg0c4L._SX342_.jpg";

   return (
      <div className='bookList'>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Romantic Comedy by Curtis Sittenfield" width="250" height="300"/>
         <img src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" width="250"height="300"/>
         <img src={book3} alt="The London Seance Society by Sarah Penner" width="250" height="300"/>
      </div>      
   );
}