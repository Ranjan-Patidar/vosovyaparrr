import React, { useState,useEffect,useCallback } from 'react';
import {AlignCenter,FileText,Activity,User,Clipboard,Anchor,Settings,LogOut, ThumbsUp,MessageCircle,MessageSquare,Maximize,Search,MoreHorizontal} from 'react-feather'
import {Row,Col,Form,FormGroup,Button} from 'reactstrap'
import {MENUITEMS} from '../sidebar/menu'
import {Link} from 'react-router-dom'
const Header = (props) => {
    // eslint-disable-next-line
    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const [searchValue, setsearchValue] = useState('');
    const [navmenu,setNavmenu] = useState(false)
    const [searchinput,setSearchinput] = useState(false)
    const [spinner,setspinner] = useState(false)
     // eslint-disable-next-line
    const [searchResult, setSearchResult] = useState(false);
    // eslint-disable-next-line
    const [searchResultEmpty, setSearchResultEmpty] = useState(false);
    
    const [sidebar, setSidebar] = useState("iconsidebar-menu");
    const [rightSidebar, setRightSidebar] = useState(true);

    const escFunction = useCallback((event) => {
        if(event.keyCode === 27) {
          setsearchValue('')
        }
    }, []);

    useEffect(() => {

      document.addEventListener("keydown", escFunction, false);
      return () => {
          document.removeEventListener("keydown", escFunction, false);
      };
    }, [escFunction]);
    
    const handleSearchKeyword = (keyword) => {
      keyword ? addFix() : removeFix()
      const items = [];
      if(keyword.length > 0 ){
        setsearchValue(keyword)
        setspinner(true)
          setTimeout(function(){ 
            setspinner(false)
          }, 1000);
      }
      else{
        setspinner(false)
      }
      mainmenu.filter(menuItems => {
        if (menuItems.title.toLowerCase().includes(keyword) && menuItems.type === 'link') {
            items.push(menuItems);
        }
        if (!menuItems.children) return false
        menuItems.children.filter(subItems => {
            if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                subItems.icon = menuItems.icon
                items.push(subItems);
            }
            if (!subItems.children) return false
            subItems.children.filter(suSubItems => {
                if (suSubItems.title.toLowerCase().includes(keyword)) {
                    suSubItems.icon = menuItems.icon
                    items.push(suSubItems);
                }
                return suSubItems
            })
            return subItems
        })
        checkSearchResultEmpty(items)
        setsearchValue(items);
        return menuItems
    });
        
    }

    const addFix = () => {
      setSearchResult(true);
      document.querySelector(".Typeahead-menu").classList.add('is-open');
      document.body.classList.add("offcanvas");
    }

  const removeFix = () => { 
      setSearchResult(false)
      setsearchValue('')
      document.querySelector(".Typeahead-menu").classList.remove('is-open');
      document.body.classList.remove("offcanvas");
      
    }

    const checkSearchResultEmpty = (items) => {
      if (!items.length) {
          setSearchResultEmpty(true);
          document.querySelector(".empty-menu").classList.add('is-open');
      } else {
          setSearchResultEmpty(false);
          document.querySelector(".empty-menu").classList.remove('is-open');
      }
  }




    const openCloseSidebar = (sidebartoggle) => {
      if (sidebartoggle === "iconsidebar-menu") {
        setSidebar("iconbar-mainmenu-close")
        document.querySelector(".iconsidebar-menu").classList.add('iconbar-mainmenu-close');
      } 
      else if(sidebartoggle === "iconbar-mainmenu-close") {
        setSidebar("iconbar-second-close")
        document.querySelector(".iconsidebar-menu").classList.add('iconbar-second-close');
        document.querySelector(".iconsidebar-menu").classList.remove('iconbar-mainmenu-close');
      }
      else {
        setSidebar("iconsidebar-menu")
        document.querySelector(".iconsidebar-menu").classList.remove('iconbar-second-close');
      }
    }

    const showRightSidebar = () => {
      if (rightSidebar) {
        setRightSidebar(!rightSidebar)
        document.querySelector(".right-sidebar").classList.add('show');
      } else {
        setRightSidebar(!rightSidebar)
        document.querySelector(".right-sidebar").classList.remove('show');
      }
    }
    
    //full screen function
    const goFull = () => {
      if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    }

    const Navmenuhideandshow = () => {
      if(navmenu){
        setNavmenu(!navmenu)
        document.querySelector('.nav-menus').classList.add('open')
      }
      else{
        setNavmenu(!navmenu)
        document.querySelector('.nav-menus').classList.remove('open')
      }
    }

    const openCloseSearch = () => {
      if(searchinput){
        setSearchinput(!searchinput)
        document.querySelector('.Typeahead-input').classList.add('open')
      }
      else{
        setSearchinput(!searchinput)
        document.querySelector('.Typeahead-input').classList.remove('open')
      }
    
    }


    return (
        <div className="page-main-header">
        <div className="main-header-right mt-5">
          <div className="main-header-left text-center">
            <div className="logo-wrapper"><Link to="/default/sample-page"><img src={require("../../../assets/images/logo/vosoLogo.jpg")} alt="" style={{ height: "80px", width: "230px", marginBottom: "5px" }}/></Link></div>
          </div>
          <div className="mobile-sidebar">
            <div className="media-body text-right switch-sm">
              <label className="switch ml-3"><AlignCenter className="font-primary" onClick={() => openCloseSidebar(sidebar)} /></label>
            </div>
          </div>
          <div className="nav-right col pull-right right-menu">
            <ul className="nav-menus">
              <li>
                <Form className="form-inline search-form" action="#javascript" method="get">
                  <FormGroup>
                    <div className="Typeahead Typeahead--twitterUsers">
                      
                      <div className="Typeahead-menu custom-scrollbar" id="search-outer">
                        {searchValue ?
                            searchValue.map((data, index) => {
                                return (
                                    <div className="ProfileCard u-cf" key={index}>
                                        <div className="ProfileCard-avatar">
                                            {data.icon}
                                        </div>
                                        <div className="ProfileCard-details">
                                            <div className="ProfileCard-realName">
                                                <Link 
                                                    to={data.path} 
                                                    className="realname" 
                                                    onClick={removeFix}
                                                >
                                                    {data.title}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : ''
                        }
                      </div>
                      <div className="Typeahead-menu empty-menu">
                        <div className="tt-dataset tt-dataset-0">
                            <div className="EmptyMessage">
                                Opps!! There are no result found.
                            </div>
                        </div>
                      </div>
                    </div>
                  </FormGroup>
                </Form>
              </li>
              
              <li className="onhover-dropdown"> <span className="media user-header"><img className="img-fluid"  src={require("../../../assets/images/logo/profileLogo.jpg")}alt="" style={{width: "30px"}} /></span>
                <ul className="onhover-show-div profile-dropdown">
                  <li className="gradient-primary d-block">
                    <h5 className="f-w-600 mb-0 ">Ram Patidar</h5><email>ramptdr23@gmail.com</email>
                  </li>
                  <li><User/>Profile</li>
                  <li><Settings/>Settings</li>
                  <li><LogOut/>Logout</li>
                </ul>
              </li>
            </ul>
            <div className="d-lg-none mobile-toggle pull-right" onClick={Navmenuhideandshow}><MoreHorizontal/></div>
          </div>
          <script id="result-template" type="text/x-handlebars-template">
            <div className="ProfileCard u-cf">                        
            <div className="ProfileCard-avatar"><i className="pe-7s-home"></i></div>
            <div className="ProfileCard-details">
            <div className="ProfileCard-realName"></div>
            </div>
            </div>
          </script>
          <script id="empty-template" type="text/x-handlebars-template"><div className="EmptyMessage">Your search turned up 0 results. This most likely means the backend is down, yikes!</div></script>
        </div>
      </div>
    );
}

export default Header;