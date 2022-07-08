import React, { useState, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { MenuList } from '../../shared/utils/sideMenu';
import { useAuthState } from './../../shared/context/useAuthContext';
import './sidebar.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from 'react-icons/fa';
import { BiAnalyse, BiSearch } from 'react-icons/bi';
import { logowhite } from '../../Entryfile/imagepath';

const Sidebar = ({ isOpen, setIsOpen, toggle }) => {
  const { user } = useAuthState();
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
        width: isOpen ? '225px' : '50px',

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

        <AnimatePresence>
          {isOpen && (
            <motion.h3 className="text-base font-bold m-2 mt-4 text-gray-500">PAYMENTS</motion.h3>
          )}
        </AnimatePresence>
        {filteredList(MenuList).map((x) => {
          var node;
          var sub_node;
          if (x.subs == undefined || x.subs.length == 0) {
            if (x.bottom == false) {
              return (
                <NavLink to={x.to} className="link my-1" activeClassName="active">
                  {x.icon}
                  <AnimatePresence>
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
                  </AnimatePresence>
                </NavLink>
              );
            }
          } else {
            sub_node = filteredList(x.subs).map((s) => (
              <NavLink to={s.to} className="link" activeClassName="active">
                {/* <div className="icon">{page.icon}</div> */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {s.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ));
            // if (sub_node.length > 0)
            //   return <SubMenu title={x.label}>{sub_node}</SubMenu>;
            // else return <></>;
          }
        })}
      </section>
      <section className="routes">
        <AnimatePresence>{!isOpen && <motion.div className="h-6"></motion.div>}</AnimatePresence>
        <AnimatePresence>
          {isOpen && (
            <motion.h3 className="text-base font-bold m-2 text-gray-500">NOTIFICATIONS</motion.h3>
          )}
        </AnimatePresence>
        {filteredList(MenuList).map((x) => {
          var node;
          var sub_node;
          if (x.subs == undefined || x.subs.length == 0) {
            if (x.bottom == true) {
              return (
                <NavLink to={x.to} className="link my-1" activeClassName="active">
                  {x.icon}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text text-semibold"
                      >
                        {x.label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            }
          } else {
            sub_node = filteredList(x.subs).map((s) => (
              <NavLink to={s.to} className="link" activeClassName="active">
                {/* <div className="icon">{page.icon}</div> */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {s.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ));
            // if (sub_node.length > 0)
            //   return <SubMenu title={x.label}>{sub_node}</SubMenu>;
            // else return <></>;
          }
        })}
      </section>
    </motion.div>
  );
};

export default withRouter(Sidebar);
