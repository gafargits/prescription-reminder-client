import React, { useContext, useEffect, useState, Fragment } from 'react';
import { FetchContext } from '../context/FetchContext';
import PageTitle from '../components/common/PageTitle';
import Prescription from '../components/common/Prescription';

export const Dashboard = () => {
  const fetchContext = useContext(FetchContext);
  const [dashboardData, setDashboardData] = useState();

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const { data } = await fetchContext.authAxios.get('all-prescriptions')
        setDashboardData(data)
        // console.log(data)
      } catch (err) {
        console.log(err)
      }
      return
    }
    getDashboardData()
  }, [fetchContext, dashboardData]);

  return (
    <Fragment>
      <PageTitle title="Dashboard" />
      {dashboardData ? (
        <>
          <div className="mb-4 flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 sm:mr-2 mb-4 sm:mb-0">
              {dashboardData && dashboardData.length
                ? dashboardData.map((prescription, i) => (
                  <Prescription key={i} name={prescription.name} formular={prescription.usageFormular} id={prescription._id} />
                ))
                : 'No Prescription Added Yet'}
            </div>
          </div>
        </>) : (
          <p>Loading...</p>
        )}
    </Fragment>
  )
}