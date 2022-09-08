// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-key */
//import { StyledWinner, StyledWinnerInfo } from './Winner.styles'
import { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'

import GlobalFilter from '../Filter/GlobalFilter'
import './style/Table.css'
interface TableProps {
  tableData?: any
  rowSelection?: any
  COLUMNS?: any
  code?: any
}

const Table = ({
  tableData,
  rowSelection,
  COLUMNS,
  code,
}: TableProps): JSX.Element => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => tableData, [])
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    //@ts-ignore
    setGlobalFilter,
  } = tableInstance
  //@ts-ignore
  const { globalFilter } = state
  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      {/* <div style={{ height: '85vh' }}> */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // @ts-ignore
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}

                  <span>
                    {
                      //@ts-ignore
                      column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''
                      // column.isSorted ? (
                      //   //@ts-ignore
                      //   column.isSortedDesc ? (
                      //     <span>down</span>
                      //   ) : (
                      //     <span>Up</span>
                      //   )
                      // ) : (
                      //   ''
                      // )
                    }
                  </span>
                </th>
              ))}
              <th className="th-scroll-width"></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => rowSelection(row)}
                className={`banner ${
                  //@ts-ignore
                  row.cells[1].value.split('/')[0] === code ? 'active' : ''
                }`}
              >
                {' '}
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* </div> */}
    </>
  )
}

export default Table
