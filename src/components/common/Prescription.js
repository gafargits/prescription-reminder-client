import React, { useContext } from 'react';
import DangerButton from '../common/DangerButton';
import { FetchContext } from '../../context/FetchContext';

const Prescription = ({ name, formular, id }) => {
  const fetchContext = useContext(FetchContext)
  
  const onDelete = async () => {
    try {
      if (window.confirm('Are you sure about deleting this prescription?')) {
        const { data } = await fetchContext.authAxios.delete(`delete-prescription/${id}`);
        console.log(data)
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border-t-4 border-blue-500 mr-3 mb-3">
      <p className="text-gray-600 uppercase text-xs">
        {formular}
      </p>
      <p className="text-3xl text-blue-600 font-bold">{name}</p>
      <div>
        <DangerButton
          text="Delete"
          onClick={() => onDelete()}
        />
      </div>
    </div>
  )
}

export default Prescription;