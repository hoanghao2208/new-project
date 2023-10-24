import { FC, PropsWithChildren, memo } from 'react';
import './index.scss';

interface Props {
    title?: string;
    subTitle?: string;
}

const AccountLayout: FC<PropsWithChildren<Props>> = memo(
    ({ children, title, subTitle }) => {
        return children;
    }
);
AccountLayout.displayName = 'AccountLayout';

export default AccountLayout;
