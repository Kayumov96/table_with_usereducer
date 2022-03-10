import file from '../assets/icons/file.svg';
import call from '../assets/icons/call.svg';
import brief from '../assets/icons/brief.svg';
import circle from '../assets/icons/circle.svg';
import info from '../assets/icons/info.svg';
import hamburger from '../assets/icons/hamburger.svg';
import About from '../View/About';
import Application from '../View/Application';
import Dashboard from '../View/Dashboard';
import Jobs from '../View/Jobs';
import Menu from '../View/Menu';
import Policy from '../View/Policy';
import Quote from '../View/Quote';
import Trucks from '../View/Trucks';
import WithUs from '../View/WithUs';


export const nav=[
    { id: 1, title: 'Driver Application', src: file, path: '/driverapplication', Component: Application },
    { id: 2, title: 'Call', src: call, path: '/call', },
    { id: 3, title: 'Get Quote', src: brief, path: '/getquote', Component: Quote},
    { id: 4, title: 'About us', src: info, path: '/aboutus', Component: About},
    {id:5, src:hamburger, path:'/menu', Component: Menu},
];
export default nav;
export const circlemenu = [
    { id: 6, src: circle, path: '/', Component: Dashboard },
    { id: 7, src: circle, path: '/jobs', Component: Jobs },
    { id: 8, src: circle, path: '/trucks', Component: Trucks },
    { id: 9, src: circle, path: '/withus', Component: WithUs },
    { id: 10, src: circle, path: '/companypolicy', Component: Policy }
];