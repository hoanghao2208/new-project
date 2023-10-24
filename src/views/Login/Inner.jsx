import { Button, Input } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';

const Inner = memo(({ handleLogin }) => {
    return (
        <AccountLayout title="Login">
            <div className="input-container">
                <div>
                    <label className="input-title required">Email</label>
                    <Input required size="large" placeholder="Email" />
                </div>
                <div>
                    <label className="input-title required">Password</label>
                    <Input.Password
                        required
                        size="large"
                        placeholder="Password"
                    />
                </div>
                <div className="forgot-password">
                    <NavLink to={routeConstants.FORGOT_PASSWORD}>
                        Forgot your password?
                    </NavLink>
                </div>
            </div>

            <Button id="login" className="account-layout-button" type="primary">
                Login
            </Button>
        </AccountLayout>
    );
});

Inner.displayName = 'Login Inner';

export default Inner;
