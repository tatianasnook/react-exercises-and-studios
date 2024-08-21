export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://m.media-amazon.com/images/I/41Vy1FFcz3L._SY445_SX342_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/5197S28VyHL._SY445_SX342_QL70_FMwebp_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/A1lnhRg0c4L._SX342_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <div>
            <img src={book1} alt="Romantic Comedy by Curtis Sittenfield" width="250"/>
         </div>
         <div>
            <img src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" width="250"/>
         </div>
         <div>
            <img src={book3} alt="The London Seance Society by Sarah Penner" width="250"/>
         </div>
         
      </div>      
   );
}