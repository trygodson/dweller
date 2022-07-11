import React, { useState, Fragment } from 'react';
import { NavLink, withRouter, useLocation } from 'react-router-dom';
import { MenuList } from '../../shared/utils/sideMenu';
import { useAuthState } from './../../shared/context/useAuthContext';
import './sidebar.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from 'react-icons/fa';
import { BiAnalyse, BiSearch } from 'react-icons/bi';
import { logowhite } from '../../Entryfile/imagepath';

const Sidebar = ({ isOpen, setIsOpen, toggle }) => {
  const { user } = useAuthState();
  const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split('/');

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: '140px',
      padding: '5px 15px',
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: 'auto',
      transition: {
        duration: 0.5,
      },
    },
  };
  const dropdownAnimation = {
    hidden: {
      width: 'auto',
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
    show: {
      width: 'auto',

      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
      },
    },
  };
  const filteredList = (menuItems) => {
    const permission = user.permission;

    if (permission) {
      return menuItems.filter(
        (x) =>
          (x.permissions && permission.some((r) => x.permissions.indexOf(r) >= 0)) ||
          !x.permissions ||
          x.permissions?.length === 0,
      );
    } else {
      return menuItems;
    }
  };

  return (
    <motion.div
      animate={{
        width: isOpen ? '225px' : '60px',

        transition: {
          duration: 0.25,
          type: '',
          damping: 10,
        },
      }}
      className={`sidebar bg-appcolor-900`}
    >
      <div className="top_section flex justify-end">
        <div className="bars">
          <FaBars size={22} onClick={toggle} />
        </div>
      </div>
      <div className="search  flex justify-center">
        <AnimatePresence>
          {isOpen && (
            <motion.img
              src={logowhite}
              className="w-32 mb-2"
              // animate="show"
              // exit="hidden"
              // variants={inputAnimation}
            />
          )}
        </AnimatePresence>
      </div>
      <section className="routes">
        {!isOpen && <motion.div className="h-6"></motion.div>}

        {filteredList(MenuList).map((x) => {
          var node;
          var sub_node;

          if (x.title === 'dashboard') {
            return (
              <motion.div>
                <AnimatePresence>
                  <motion.div>
                    <motion.div
                      className={`link flex justify-between ${
                        `/${splitLocation[1]}/${splitLocation[2]}` == x.to && `active`
                      }`}
                    >
                      <NavLink key={x.to} to={x.to} className="flex my-1" activeClassName="">
                        {x.icon}
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="text-base ml-2 border-0 font-semibold"
                          >
                            {x.label}
                          </motion.div>
                        )}
                      </NavLink>
                      {/* {isOpen && <motion.i className="fi fi-rr-angle-small-down text-lg" />} */}
                    </motion.div>
                    {x.subs != undefined &&
                      x.subs.length > 0 &&
                      isOpen &&
                      filteredList(x.subs).map((s) => {
                        return (
                          <NavLink key={s.to} to={s.to} className="link" activeClassName="active">
                            {/* <div className="icon">{page.icon}</div> */}
                            <AnimatePresence>
                              <motion.div
                                variants={dropdownAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="link_text "
                              >
                                {s.label}
                              </motion.div>
                            </AnimatePresence>
                          </NavLink>
                        );
                      })}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          }
        })}
      </section>
      <section className="routes">
        {!isOpen && <motion.div className="h-1"></motion.div>}

        <AnimatePresence>
          {isOpen && (
            <motion.h3 className="text-base font-bold m-2 mt-1 text-gray-500">
              COLLECTIONS
            </motion.h3>
          )}
        </AnimatePresence>
        {filteredList(MenuList).map((x) => {
          var node;
          var sub_node;

          if (x.title === 'collection') {
            return (
              <motion.div>
                <AnimatePresence>
                  <motion.div>
                    <motion.div
                      className={`link flex justify-between ${
                        `/${splitLocation[1]}/${splitLocation[2]}` == x.to && `active`
                      }`}
                    >
                      <NavLink key={x.to} to={x.to} className="flex my-1" activeClassName="">
                        {x.icon}
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="text-base ml-2 border-0 font-semibold"
                          >
                            {x.label}
                          </motion.div>
                        )}
                      </NavLink>
                      {/* {isOpen && <motion.i className="fi fi-rr-angle-small-down text-lg" />} */}
                    </motion.div>
                    {x.subs != undefined &&
                      x.subs.length > 0 &&
                      isOpen &&
                      filteredList(x.subs).map((s) => {
                        return (
                          <NavLink key={s.to} to={s.to} className="link" activeClassName="active">
                            {/* <div className="icon">{page.icon}</div> */}
                            <AnimatePresence>
                              <motion.div
                                variants={dropdownAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="link_text "
                              >
                                {s.label}
                              </motion.div>
                            </AnimatePresence>
                          </NavLink>
                        );
                      })}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          }
        })}
      </section>
      <section className="routes">
        <AnimatePresence>{!isOpen && <motion.div className="h-2"></motion.div>}</AnimatePresence>
        <AnimatePresence>
          {isOpen && (
            <motion.h3 className="text-base font-bold m-2 text-gray-500">COMMUINITY</motion.h3>
          )}
        </AnimatePresence>
        {filteredList(MenuList).map((x) => {
          var node;
          var sub_node;
          if (x.title == 'community') {
            return (
              <motion.div>
                <AnimatePresence>
                  <motion.div>
                    <NavLink key={x.to} to={x.to} className="link my-1" activeClassName="active">
                      {x.icon}
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text font-semibold"
                        >
                          {x.label}
                        </motion.div>
                      )}
                    </NavLink>
                    {x.subs != undefined &&
                      x.subs.length > 0 &&
                      filteredList(x.subs).map((s) => {
                        if (isOpen) {
                          return (
                            <NavLink key={s.to} to={s.to} className="link" activeClassName="active">
                              {/* <div className="icon">{page.icon}</div> */}
                              <AnimatePresence>
                                <motion.div
                                  variants={dropdownAnimation}
                                  initial="hidden"
                                  animate="show"
                                  exit="hidden"
                                  className="link_text "
                                >
                                  {s.label}
                                </motion.div>
                              </AnimatePresence>
                            </NavLink>
                          );
                        }
                      })}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          }
          // if (sub_node.length > 0)
          //   return <SubMenu title={x.label}>{sub_node}</SubMenu>;
          // else return <></>;
        })}
      </section>
      <section className="routes">
        <AnimatePresence>{!isOpen && <motion.div className="h-6"></motion.div>}</AnimatePresence>
        <AnimatePresence>
          {isOpen && (
            <motion.h3 className="text-base font-bold m-2 text-gray-500">NOTIFICATION</motion.h3>
          )}
        </AnimatePresence>
        {filteredList(MenuList).map((x) => {
          var node;
          var sub_node;
          if (x.title === 'notification') {
            return (
              <motion.div>
                <AnimatePresence>
                  <motion.div>
                    <NavLink key={x.to} to={x.to} className="link my-1" activeClassName="active">
                      {x.icon}
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text font-semibold"
                        >
                          {x.label}
                        </motion.div>
                      )}
                    </NavLink>
                    {x.subs != undefined &&
                      x.subs.length > 0 &&
                      filteredList(x.subs).map((s) => {
                        if (isOpen) {
                          return (
                            <NavLink key={s.to} to={s.to} className="link" activeClassName="active">
                              {/* <div className="icon">{page.icon}</div> */}
                              <AnimatePresence>
                                <motion.div
                                  variants={dropdownAnimation}
                                  initial="hidden"
                                  animate="show"
                                  exit="hidden"
                                  className="link_text "
                                >
                                  {s.label}
                                </motion.div>
                              </AnimatePresence>
                            </NavLink>
                          );
                        }
                      })}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          }
          // if (sub_node.length > 0)
          //   return <SubMenu title={x.label}>{sub_node}</SubMenu>;
          // else return <></>;
        })}
      </section>
      <section className="routes">
        <AnimatePresence>{!isOpen && <motion.div className="h-6"></motion.div>}</AnimatePresence>
        <AnimatePresence>
          {isOpen && (
            <motion.h3 className="text-base font-bold m-2 text-gray-500">SERVICES</motion.h3>
          )}
        </AnimatePresence>
        {filteredList(MenuList).map((x) => {
          var node;
          var sub_node;
          if (x.title === 'services') {
            return (
              <motion.div>
                <AnimatePresence>
                  <motion.div>
                    <NavLink key={x.to} to={x.to} className="link my-1" activeClassName="active">
                      {x.icon}
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text font-semibold"
                        >
                          {x.label}
                        </motion.div>
                      )}
                    </NavLink>
                    {x.subs != undefined &&
                      x.subs.length > 0 &&
                      filteredList(x.subs).map((s) => {
                        if (isOpen) {
                          return (
                            <NavLink key={s.to} to={s.to} className="link" activeClassName="active">
                              {/* <div className="icon">{page.icon}</div> */}
                              <AnimatePresence>
                                <motion.div
                                  variants={dropdownAnimation}
                                  initial="hidden"
                                  animate="show"
                                  exit="hidden"
                                  className="link_text "
                                >
                                  {s.label}
                                </motion.div>
                              </AnimatePresence>
                            </NavLink>
                          );
                        }
                      })}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          }
          // if (sub_node.length > 0)
          //   return <SubMenu title={x.label}>{sub_node}</SubMenu>;
          // else return <></>;
        })}
      </section>
    </motion.div>
  );
};

export default withRouter(Sidebar);
