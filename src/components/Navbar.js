import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {

  const searchUrl = `/search/${searchText}`;
  const navigate = useNavigate();
  const updateSearchText = (e) => {
    // TODO: add smth like if statment...
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("search-btn").click(); 
      navigate(searchUrl); 
    }
    else {
      navigate(`/search`);
      setSearchText(e.target.value);
    }
  } 


  return (
    <nav className ="navbar navbar-expand-lg bg-light border-bottom border-3 sticky-top">
      <div className ="container-fluid">
        <Link className ="navbar-brand" to="/">Movie Browser</Link>
        <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="gotonavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className ="navbar-toggler-icon"></span>
        </button>
        <div className ="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
          <li className ="nav-item">
            <Link className ="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className ="nav-item">
            <Link className ="nav-link" to="/about">About</Link>
          </li>
          <li className ="nav-item">
            <Link className ="nav-link disabled" to="/">TV Shows</Link>
          </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" id="my-Input" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={updateSearchText}/>
            <Link to={searchUrl} >
              <button className="btn btn-outline-success" id="search-btn" type="submit">Search</button> 
            </Link>
          </form>
        </div>
      </div>
    </nav>
  )
}


export default Navbar;