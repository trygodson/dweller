/**
 * App Routes
 */
import React, { Component, Suspense, useState } from 'react';
import { Redirect, Switch, withRouter } from 'react-router-dom';
import { Loading } from '../../Entryfile/RouteGuard';
import PermissionedRoute from '../../router_service/permissioned_route';
import Sidebar from './sidebar';
import { AnimatePresence, motion } from 'framer-motion';

import NavbarProfileIcons from '../components/navbar/NavbarProfile';
// router service
import routerService from '../../router_service';
import { useAuthState } from '../context/useAuthContext';

const DefaultLayout = (props) => {
  const { user } = useAuthState();
  const { match } = props;
  const [toggled, setToggled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = (e) => {
    e.preventDefault();
    // console.log('Hi');
    setToggled(!toggled);
    handleCollapsedChange(!collapsed);
  };

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const moreprops = [isOpen, setIsOpen, toggle];

  return (
    <motion.section className="w-screen flex justify-between" style={{ backgroundColor: 'FCFCFC' }}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
      <div
        className="h-screen relative px-6 py-4"
        style={{ width: `calc(100% - ${isOpen ? '225px' : '50px'})`, overflowY: 'scroll' }}
      >
        {/* <Navbar openSidebar={null} sidebarOpen={null} /> */}
        {/* <TopNavBar openSideBar={null}  sidebarOpen={null}/> */}
        {/* <List size={22} style={{ position: 'absolute' }} /> */}

        <NavbarProfileIcons />

        <AnimatePresence>
          <motion.div className="min-full min-h-max  mt-10">
            <Suspense fallback={<Loading />}>
              <Switch>
                {routerService &&
                  routerService.map((route, key) => (
                    <PermissionedRoute
                      key={key}
                      path={`${match.url}/${route.path}`}
                      component={route.component}
                      permissions={route.permission}
                    />
                  ))}
                <Redirect from={'/'} to={'/dashboard'}></Redirect>
              </Switch>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
export default withRouter(DefaultLayout);

// export default withRouter(connect(null)(DefaultLayout));
