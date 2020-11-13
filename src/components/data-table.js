/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import HorList from '../partials/horizontal-list';
import { ButtonText } from './button';

const TableWrapper = styled.table`
  width: 100%;  
  border: 1px solid #1A3AAB;
  border-collapse: separate;
  border-radius: 3px;
  border-spacing: 0px;
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    border-collapse: separate;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  th, td {
    padding: 1rem .3rem; 
    text-align: left;
    vertical-align: top;
    border-left: none;   
  }
  th, td {
    padding: 1rem .3rem;
    text-align: left;
  }
  td {
    border-top: 1px solid #1A3AAB;   
  }
  tbody tr td {
    border-top: 0.5px solid #C4C4C4;
  }
  thead .last-row .first-item, tbody .last-row .last-item {
    border-radius: 0 0 0 3px;
  }
`;

const TableHeadRowWrapper = styled.tr`

`;
const TableHeadCell = styled.th`
  color: #3F3E3E;
`;

const TableBodyRowWrapper = styled.tr`

`;

const TableBodyCell = styled.td`

`;

const EditButton = styled(ButtonText)`
  font-size: .875rem;
  padding: .6rem 1.2rem;
  color: #03543f;
  background-color: #def7ec;
`;

const DeleteButton = styled(ButtonText)`
  font-size: .875rem;
  padding: .6rem 1.2rem;
  color: #c11a47;
  background-color: #ffe8eb;
`;

const DataTable = ({
  tableContent, admin, openModal,
}) => {
  const headers = Object.keys(tableContent[0]);
  return (
    <TableWrapper>
      <thead>
        <TableHeadRowWrapper className="first-row last-row">
          {
            (headers.length > 0) && headers.map((header, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={`${header}-${index}`}>
                <TableHeadCell
                  className={
                    (index === 0)
                      ? 'first-item'
                      : ((index === headers.length - 1) ? 'last-item' : null)
                  }
                >
                  {headers[index]}
                </TableHeadCell>
              </React.Fragment>
            ))
          }
          {
            admin && (
              <TableHeadCell>
                Admin Controls
              </TableHeadCell>
            )
          }
        </TableHeadRowWrapper>
      </thead>
      <tbody>
        {
          tableContent.length > 0 && tableContent.map((row) => (
            <React.Fragment key={row}>
              <TableBodyRowWrapper className={(row === 0) ? 'first-row' : ((row === tableContent.length - 1) ? 'last-row' : null)}>
                {
                  headers.length > 0 && headers.map((column, columnIndex) => (
                    <React.Fragment key={column}>
                      <TableBodyCell className={(column === 0) ? 'first-item' : ((column === headers.length - 1) ? 'last-item' : null)}>
                        {row[column]}
                      </TableBodyCell>
                      {
                        (columnIndex === headers.length - 1) && (
                          <TableBodyCell className={(column === 0) ? 'first-item' : ((column === headers.length - 1) ? 'last-item' : null)}>
                            <HorList spacing={10} leftStart>
                              <EditButton
                                type="secondary"
                                onClick={() => (
                                  openModal({
                                    type: 'edit',
                                    open: true,
                                    details: row,
                                  })
                                )}
                              >
                                Edit
                              </EditButton>
                              <DeleteButton
                                type="secondary"
                                onClick={() => (
                                  openModal({
                                    type: 'delete',
                                    open: true,
                                    details: row,
                                  })
                                )}
                              >
                                Delete
                              </DeleteButton>
                            </HorList>
                          </TableBodyCell>
                        )
                      }
                    </React.Fragment>
                  ))
                }
              </TableBodyRowWrapper>
            </React.Fragment>
          ))
        }
      </tbody>
    </TableWrapper>
  );
};
DataTable.defaultProps = {
  admin: false,
};

DataTable.propTypes = {
  tableContent: PropTypes.arrayOf(PropTypes.object).isRequired,
  admin: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
};

export default DataTable;
