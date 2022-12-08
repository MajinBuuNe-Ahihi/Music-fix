import {Link} from 'react-router-dom';

import '../../assets/css/Main.css';
import './Header-styled.js'
import {StyledHeader} from './Header-styled'
import SearchBar from '../SearchBar/SearchBar';




function Header() {
  return (
    <StyledHeader>
        <div className="mainLogo">
          <Link to="/"><img src="/Logo.png"></img></Link>
        </div>
        <div className="headerIn">
          <SearchBar />
          <div className="userLogin">
            User Name
          </div>
        </div>
    </StyledHeader>
  );
}




export default Header;