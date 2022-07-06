import BarChart from '../../../../shared/components/BarChart/BarChart';
import DoughnutCharts from '../../../../shared/components/donought/doughnut';
import TheLineCharts from '../../../../shared/components/LineChart/LineChart';
import LineCharts from '../../../../shared/components/LineChart/LineChart';
import RecentTransaction from './recent_transaction';

const DwellerPayDashboard = () => {
  return (
    <main className="text-9xl">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="flex justify-between items-center border-b-2 pb-2 px-1 border-grey-500">
            <div className="flex">
              <div className="w-10 h-10 bg-red-500 mr-2 rounded"></div>
              <div className="flex flex-col justify-around">
                <p className="text-sm font-light">Nigeria</p>
                <p className="text-lg font-extrabold">Dweller Pay</p>
              </div>
            </div>
            <div className="text-base">
              <p>All Reviews</p>
            </div>
          </div>
          {/* chart */}
          <div className="h-60 w-full flex justify-center items-center border-b-2 px-1 border-grey-500">
            <div className="grid w-3/4 grid-cols-6 gap-4">
              <div className="col-span-2">
                <DoughnutCharts />
              </div>
              <div className="col-span-4 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-light">Total Transaction</p>
                  <p className="text-lg font-extrabold"> ₦340,883</p>
                </div>
                <div className="grid  grid-cols-3 py-3 gap-3">
                  <div className="col-span-1">
                    <p className="text-xs font-normal">Executed</p>
                    <div className="flex  items-center">
                      <div className="w-2 h-2 bg-green-300 mr-2 rounded-full"></div>
                      <p className="text-base font-medium">14,963</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="text-xs font-normal">Completed</p>
                    <div className="flex  items-center">
                      <div className="w-2 h-2 bg-green-500 mr-2 rounded-full"></div>
                      <p className="text-base font-medium">356,963</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="text-xs font-normal">Returned</p>
                    <div className="flex  items-center">
                      <div className="w-2 h-2 bg-blue-500 mr-2 rounded-full"></div>
                      <p className="text-base font-medium">51</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="text-xs font-normal">User Failed</p>
                    <div className="flex  items-center">
                      <div className="w-2 h-2 bg-blue-500 mr-2 rounded-full"></div>
                      <p className="text-base font-medium">51</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <p className="text-xs font-normal">System Failed</p>
                    <div className="flex  items-center">
                      <div className="w-2 h-2 bg-blue-500 mr-2 rounded-full"></div>
                      <p className="text-base font-medium">51</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* histogram */}
          <div className="mt-5">
            <div className="grid grid-cols-4 gap-6">
              <div className="col-span-4 ">
                <div
                  className="flex w-max mb-2 justify-between items-center"
                  style={{ width: 'inherit' }}
                >
                  <p className="text-base  font-semibold">Gross Volume</p>
                  <p className="text-base   font-semibold">20,998</p>
                </div>
                <div className="w-full">
                  <TheLineCharts />
                </div>
              </div>
              {/* <div className="col-span-2">
                <div
                  className="flex w-max mb-2 justify-between items-center"
                  style={{ width: 'inherit' }}
                >
                  <p className="text-base  font-semibold">Total Transaction</p>
                  <p className="text-base   font-semibold"> ₦478,998</p>
                </div>

                <BarChart />
              </div> */}
            </div>
          </div>
        </div>
        {/* rhs with card */}
        <div className="col-span-1">
          <div className="bg-white flex flex-col justify-between h-40 mb-3 p-5 rounded-lg shadow">
            <div>
              <p className="text-sm font-normal text-grey-800">Available Credit</p>
              <p className="text-base font-bold"> ₦276,676,78 NAIRA</p>
            </div>
            <div>
              <p className="text-xs font-bold mb-1">23% Drawdown</p>
              <div className="w-full h-3 rounded-md bg-blue-300 "></div>
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

export default DwellerPayDashboard;
