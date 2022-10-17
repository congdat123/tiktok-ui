import classNames from 'classnames/bind';
// import { FollowIcon, HomeIcon, LiveIcon } from '~/components/Icons';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    // const navMenu = [
    //     {
    //         icon: <HomeIcon />,
    //         title: 'For You',
    //         to: '/',
    //     },
    //     {
    //         icon: <FollowIcon />,
    //         title: 'Following',
    //         to: '/following',
    //     },
    //     {
    //         icon: <LiveIcon />,
    //         title: 'LIVE',
    //         to: '/live',
    //     },
    // ];
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('nav-content')}>Sidebar</div>
        </aside>
    );
}

export default Sidebar;
