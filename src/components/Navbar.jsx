import React, { useState, useEffect, forwardRef, useRef } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import useResizeObserver from '../hooks/useResizeObserver';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { mainBody, repos, about, skills } from '../editable-stuff/config.js';
import { NavLink } from './home/migration';

const Navigation = forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  useEffect(() => {
    if (!navbarDimensions) return;
    if (ref.current) {
      const elementOffsetTop = ref.current.offsetTop;

      navBottom - scrollPosition >= elementOffsetTop
        ? setIsTop(false)
        : setIsTop(true);
    }
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${
        !isTop ? 'navbar-white' : 'navbar-transparent'
      }`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={'/#home'}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={"/blog"}>Blog</Link>
            </NavLink>
          } */}
          {repos.show && <NavLink href={'/#projects'}>Projects</NavLink>}
          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>
          {about.show && (
            <NavLink className="nav-item lead" href={'/#aboutme'}>
              About
            </NavLink>
          )}
          {skills.show && (
            <NavLink className="nav-item lead" href={'/#skills'}>
              Skills
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
