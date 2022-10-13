import React, { useRef, useState, useEffect } from 'react';
import { BsPalette } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { setThemeMode, setThemeColor } from '~/features/Admin/components/ThemeMenu/themeSlice';
const mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light',
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark',
    },
];

const color_settings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue',
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red',
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan',
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green',
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange',
    },
];

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active');
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active');
            }
        }
    });
};

const ThemeMenu = () => {
    const menu_ref = useRef(null);
    const menu_toggle_ref = useRef(null);

    clickOutsideRef(menu_ref, menu_toggle_ref);

    const setActiveMenu = () => menu_ref.current.classList.add('active');

    const closeMenu = () => menu_ref.current.classList.remove('active');

    // const theme = useSelector((state) => state.theme)
    const [currMode, setcurrMode] = useState('light');

    const [currColor, setcurrColor] = useState('blue');

    const dispatch = useDispatch();

    const themeReducer = useSelector((state) => state.theme);
    console.log('hi', themeReducer);

    const setMode = (mode) => {
        setcurrMode(mode.id);
        localStorage.setItem('themeMode', mode.class);
        dispatch(setThemeMode(mode.class));
    };

    const setColor = (color) => {
        setcurrColor(color.id);
        localStorage.setItem('colorMode', color.class);
        dispatch(setThemeColor(color.class));
    };

    useEffect(() => {
        const themeClass = mode_settings.find((e) => e.class === localStorage.getItem('themeMode', 'theme-mode-light'));
        console.log('mode', themeClass);

        const colorClass = color_settings.find(
            (e) => e.class === localStorage.getItem('colorMode', 'theme-mode-light'),
        );

        if (themeClass !== undefined) setcurrMode(themeClass.id);

        if (colorClass !== undefined) setcurrColor(colorClass.id);
    }, []);

    return (
        <div className="themeMenu">
            <span ref={menu_toggle_ref} className="themeMenu-palette" onClick={() => setActiveMenu()}>
                <BsPalette />
            </span>
            <div ref={menu_ref} className="themeMenu-content">
                <h4>Theme settings</h4>
                <span className="themeMenu-close" onClick={() => closeMenu()}>
                    <AiOutlineClose />
                </span>
                <div className="themeMenu-select">
                    <span>Choose mode</span>
                    <ul className="themeMenu-list">
                        {mode_settings.map((item, index) => (
                            <li key={index} onClick={() => setMode(item)}>
                                <div
                                    className={`themeMenu-color ${item.background} ${
                                        item.id === currMode ? 'active' : ''
                                    }`}
                                >
                                    <i>
                                        <AiOutlineCheck />
                                    </i>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="themeMenu-select">
                    <span>Choose color</span>
                    <ul className="themeMenu-list">
                        {color_settings.map((item, index) => (
                            <li key={index} onClick={() => setColor(item)}>
                                <div
                                    className={`themeMenu-color ${item.background} ${
                                        item.id === currColor ? 'active' : ''
                                    }`}
                                >
                                    <i>
                                        <AiOutlineCheck />
                                    </i>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ThemeMenu;
