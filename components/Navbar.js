import Link from 'next/link';
import { BsPerson, BsMoon, BsBrightnessHigh } from 'react-icons/bs';
import {
  AiOutlineHome,
  AiOutlineFileImage,
  AiOutlinePicture,
  AiOutlinePhone,
  AiOutlineClose,
  AiOutlineAppstore,
} from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(!isOpen);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <BsBrightnessHigh
          className=" btn1"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <BsMoon
          className="btn2"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link href="/">
          <a className="nav_logo">Priti Kumari</a>
        </Link>

        <div className={isOpen ? 'nav_menu show_menu' : 'nav_menu'}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <Link href="/">
                <a className="nav_link">
                  <AiOutlineHome className="nav_icon" />
                  Home
                </a>
              </Link>
            </li>

            <li className="nav_item">
              <Link href="/about">
                <a className="nav_link">
                  <BsPerson className="nav_icon" />
                  About
                </a>
              </Link>
            </li>

            <li className="nav_item">
              <Link href="/skills">
                <a className="nav_link">
                  <AiOutlineFileImage className="nav_icon" />
                  Skills
                </a>
              </Link>
            </li>

            <li className="nav_item">
              <Link href="/projects">
                <a className="nav_link">
                  <AiOutlinePicture className="nav_icon" />
                  Projects
                </a>
              </Link>
            </li>

            <li className="nav_item">
              <Link href="/contact">
                <a className="nav_link">
                  <AiOutlinePhone className="nav_icon" />
                  Contact me
                </a>
              </Link>
            </li>
          </ul>
          <div className="nav_cut" onClick={closeMenu}>
            <AiOutlineClose className="nav_close" />
          </div>
        </div>
        <div className="nav_btns">
          {renderThemeChanger()}

          <div className="nav_toggle" onClick={openMenu}>
            <AiOutlineAppstore className="nav_icon" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
