import React, { useContext, useEffect, useState } from 'react'
import { accountlistContext, currentdeptContext } from '../Globalcontext'
import axios from 'axios'

function Accountsstud() {
  const { accountlist, setaccountlist } = useContext(accountlistContext)
  const { currentdept } = useContext(currentdeptContext)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRow, setSelectedRow] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const handleativate = async (id, active) => {
    const temp = {
      acc_id: id,
      active: active,
      dep_id: currentdept.dep_id,
    }

    await axios
      .post('https://api.kyusillid.online/api/setuseractivate', temp)
      .then((response) => {
        setaccountlist(response.data)
        console.log(response.data)
      })
      .catch()
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredAccounts = accountlist?.studentlist?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredAccounts?.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const totalPages = Math.ceil(filteredAccounts?.length / itemsPerPage)
  const pageNumbers = []

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className=''>
      <div className='marginlass'>
        <h4>Student Accounts Table</h4>
      </div>
      <div className='search marginlas'>
        <input
          type='text'
          placeholder='Search by name'
          name='search'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className='tertiary borderradius-lg padding12'>
        <table className='table col-lg-12'>
          <thead className='primary'>
            <tr>
              <th>Student Number</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((item, index) => (
              <tr key={index}>
                <td data-label='Student Number'>{item.studnum}</td>
                <td data-label='Last Name'>{item.name}</td>
                <td>
                  {/* {item.active ? (
                    <button
                      className='commonbutton secondary lighttext'
                      onClick={() => {
                        handleativate(item.acc_id, 0)
                      }}
                    >
                      {' '}
                      Active{' '}
                    </button>
                  ) : (
                    <button
                      className='commonbutton background darktext'
                      onClick={() => {
                        handleativate(item.acc_id, 1)
                      }}
                    >
                      {' '}
                      Deactivated{' '}
                    </button>
                  )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      <div className="pagination">
      {currentPage > 1 && (
        <button className="commonbutton secondary lighttext" onClick={() => paginate(currentPage - 1)}>Previous</button>
      )}
      {pageNumbers
        .slice(
          Math.max(currentPage - 2, 0),
          Math.min(currentPage + 1, totalPages)
        )
        .map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={currentPage === pageNumber ? "active commonbutton primary lighttext " : "commonbutton secondary lighttext"}
          >
            {pageNumber}
          </button>
        ))}
      {currentPage < totalPages && (
        <button className="commonbutton secondary lighttext" onClick={() => paginate(currentPage + 1)}>Next</button>
      )}
    </div>

  </div>
    </div>
  );
}

export default Accountsstud;