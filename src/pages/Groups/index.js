import { useState, useEffect } from "react"
import { Outlet, useOutlet, useLocation } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import List from "./List"

import { getRecords } from "./api"

const Groups = () => {

  const outlet = useOutlet()

  const [filters, setFilters] = useState({})
  const [records, setRecords] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pagination, setPagination] = useState({})

  const results = useQuery(['groupsList', currentPage, filters], () => getRecords({ page: currentPage, filters }), {
    keepPreviousData : true,
    onSuccess: (res) => {
      const { data, pagination } = res?.data?.data
      setRecords(data)
      setPagination(pagination)
    }
  })

  return (
    <>
      {
        outlet
        ?
        <Outlet />
        :
        <List />
      }
    </>
  )
}

export default Groups