import './hobbyLinks.css';

const HobbyLinks = () => {
  const hobbyLinks = ["https://www.imdb.com/", "https://thegreatestbooks.org/"]

  return (
    <div className='hobbyLinks'>
      <h3>My hobbies</h3>
      <a href={hobbyLinks[0]} target="_blank">Movies link</a>
      <a href={hobbyLinks[1]} target="_blank">Books link</a>
    </div>
  )
}

export default HobbyLinks;