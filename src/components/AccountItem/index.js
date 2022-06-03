import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/debf82e3bab4230a29e417efe2163c81~c5_300x300.webp?x-expires=1654408800&x-signature=Th8Dw9CkBfBDGrcVsYTuZFsFMtU%3D"
                alt="user"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>An Pham</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <span className={cx('username')}>Pham Quoc An</span>
            </div>
        </div>
    );
}

export default AccountItem;
