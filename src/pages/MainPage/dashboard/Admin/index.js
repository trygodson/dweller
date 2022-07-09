import { GiStopwatch } from 'react-icons/gi';
import {
  BsFlagFill,
  BsFillArrowRightCircleFill,
  BsArrowUpRight,
  BsFillCheckCircleFill,
  BsChevronRight,
} from 'react-icons/bs';
import BarChart from '../../../../shared/components/BarChart/BarChart';
import TheGradientLineCharts from '../../../../shared/components/LineChart/gradientlinechart';
import DoughnutCharts from '../../../../shared/components/donought/doughnut';
import RecentTransaction from '../dwellerpay/recent_transaction';

const AdminDashboard = () => {
  return (
    <main className="mt-5">
      <div style={{ height: 'calc(100vh * 0.12)' }}>
        <div className="flex ">
          <div className="h-16 w-16 mr-2 rounded-full bg-cover bg-[url('https://avatars.githubusercontent.com/u/86506519?v=4')]"></div>
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-1">
              Hi <span className="font-extrabold tracking-wide">Godson</span>
            </p>
            <p className="text-sm">
              Here's the report for today,{' '}
              <span className="font-bold">take a moment to take a look</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-9">
          <div
            className="border border-gray-300  shadow-md rounded-md "
            style={{ height: 'calc(100vh * 0.45)' }}
          >
            <div className="grid px-5 border-b border-gray-300 py-3 grid-cols-2 h-3/5 gap-4">
              <div className="col-span-1 h-full flex flex-col justify-between">
                <div className="">
                  <h4 className="text-xl font-bold">Accounting</h4>
                  <p className="text-sm">March 1, 2020 - April 11, 2021</p>
                </div>
                <div>
                  <p className="text-sm">AVG Monthly Balance</p>
                  <h4 className="text-3xl font-extrabold">₦5,487,879</h4>
                  <p></p>
                </div>
              </div>
              <div className="col-span-1 flex items-end">
                <div className="mb-2">
                  <BarChart />
                </div>
              </div>
            </div>
            <div className="h-2/5 px-5 border-gray-400">
              <div className="grid grid-cols-2 h-full">
                <div className="col-span-1 flex h-full items-center">
                  <div className="flex">
                    <div className="h-14 w-14 mr-3 rounded-full shadow-lg flex justify-center items-center bg-gradient-to-b from-green-200 via-white to-white">
                      <GiStopwatch size={26} className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-semibold ">₦98,487,879</h4>
                      <p className="text-sm font-normal font-mono">Total income</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex h-full items-center">
                  <div className="flex">
                    <div className="h-14 w-14 mr-2 rounded-full shadow-lg flex justify-center items-center bg-gradient-to-b from-red-200 via-white to-white">
                      <GiStopwatch size={26} className="text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-semibold ">₦ 16,487,879</h4>
                      <p className="text-sm font-normal font-mono">Total expenses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4" style={{ height: 'calc(100vh * 0.37)' }}>
            <div className="grid grid-cols-2 h-full gap-6">
              <div className="col-span-1 grid grid-rows-5 grid-flow-col gap-2 px-4 py-3 h-full border border-gray-300  shadow-md rounded-md">
                <div className="row-span-1 flex items-center">
                  <p className="text-base font-bold">Task Summary</p>
                </div>
                <div className="row-span-2">
                  <div className="grid h-full grid-cols-3 gap-3">
                    <div className="col-span-1  flex flex-col justify-between p-2 overflow-hidden  h-full relative shadow rounded-md bg-gradient-to-r from-orange-400 via-orange-500  to-orange-400">
                      <p className="text-sm text-white">Now</p>
                      <p className="text-2xl text-white font-bold">3</p>

                      <BsFlagFill
                        size={33}
                        color={' #e2e8f098'}
                        style={{ right: '-6px' }}
                        className=" absolute bottom-3 right-0"
                      />
                    </div>
                    <div className="col-span-1 flex flex-col justify-between p-2 overflow-hidden h-full relative rounded-md shadow bg-red-500 bg-gradient-to-r from-indigo-800 via-indigo-800  to-indigo-800">
                      <p className="text-sm text-white ">Assigned</p>
                      <p className="text-2xl text-white font-bold">16</p>
                      <BsFillArrowRightCircleFill
                        size={33}
                        color={'#e2e8f098'}
                        className=" absolute bottom-3 right-0"
                        style={{ right: '-6px' }}
                      />
                    </div>
                    <div className="col-span-1 flex flex-col justify-between p-2 overflow-hidden h-full relative rounded-md shadow bg-red-500 bg-gradient-to-r from-teal-500 via-teal-500  to-teal-600">
                      <p className="text-sm text-white ">Closed</p>
                      <p className="text-2xl text-white font-bold">36</p>

                      <BsFillCheckCircleFill
                        size={33}
                        style={{ right: '-6px' }}
                        color={'#e2e8f098'}
                        className=" absolute bottom-3 right-0"
                      />
                    </div>
                  </div>
                </div>
                <div className="row-span-2 relative">
                  <div className="w-4/5 h-full flex flex-col justify-end">
                    <p className="text-base tracking-wide font-normal mb-2">Ontime payment Rate</p>
                    <div className="flex items-end">
                      <span className="text-3xl font-extrabold">98%</span>
                      <div className="flex font-extrabold text-teal-600">
                        <BsArrowUpRight size={14} className="mx-1 " color={'rgb(13 148 136)'} />
                        <span className="text-sm text-teal-600 mb-1">2.36%</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-3/5 absolute bottom-0 right-0"></div>
                </div>
              </div>
              <div className="col-span-1  grid grid-rows-5 grid-flow-col gap-2 px-4 py-3 h-full   border border-gray-300  shadow-md rounded-md">
                <div className="row-span-1">
                  <div className="row-span-1 flex items-center justify-between">
                    <p className="text-base font-bold">Task Summary</p>
                    <div className="flex items-center justify-between">
                      <p className="text-teal-600 text-sm font-semibold">All properties</p>
                      <BsChevronRight size={12} className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="row-span-4">
                  <div className="grid grid-cols-2 h-full">
                    <div className="col-span-1 h-full">
                      <div className="grid h-full grid-rows-3 gap-4">
                        <div className="row-span-1">
                          <div className="flex items-start ">
                            <div className="h-3 w-3 mr-4 mt-1 bg-indigo-800"></div>
                            <div>
                              <p className="text-2xl font-semibold" style={{ lineHeight: '1' }}>
                                298
                              </p>
                              <div className="flex items-center">
                                <p className="text-sm mr-2">Occupied </p>
                                <span className="text-gray-400">49%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row-span-1">
                          <div className="flex items-start ">
                            <div className="h-3 w-3 mr-4 mt-1 bg-teal-500"></div>
                            <div>
                              <p className="text-2xl font-semibold" style={{ lineHeight: '1' }}>
                                249
                              </p>
                              <div className="flex items-center">
                                <p className="text-sm mr-2">Vacant</p>
                                <span className="text-gray-400">39%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row-span-1">
                          <div className="flex items-start ">
                            <div className="h-3 w-3 mr-4 mt-1 bg-orange-500"></div>
                            <div>
                              <p className="text-2xl font-semibold" style={{ lineHeight: '1' }}>
                                85
                              </p>
                              <div className="flex items-center">
                                <p className="text-sm mr-2">Maintainance </p>
                                <span className="text-gray-400">1.3%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 h-full flex justify-center items-center">
                      <div className="relative">
                        <div className="relative">
                          <DoughnutCharts />
                        </div>
                        <div className="flex absolute top-1/3 right-1/3 flex-col justify-center items-center">
                          <p className="text-4xl font-semibold">632</p>
                          <p className="text-xs">Total unit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-white flex flex-col justify-between h-40 mb-3 p-5 rounded-lg shadow">
            <div>
              <p className="text-sm font-normal text-grey-800">Available Credit</p>
              <p className="text-base font-bold"> ₦276,676,78 NAIRA</p>
            </div>
            <div>
              <p className="text-xs font-bold mb-1">23% Drawdown</p>
              <div className="w-full h-3 rounded-md bg-orange-500 "></div>
              <div className="flex justify-between mt-1">
                <p className="text-xs text-grey-600 font-semibold">₦152,765 Used</p>
                <p className="text-xs text-grey-600 font-semibold">Limit ₦52M</p>
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold my-4">Recent Activities</h3>
          <RecentTransaction />
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
