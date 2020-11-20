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

const CreateButton = styled(ButtonText)`
  font-size: .875rem;
  padding: .6rem 4rem;
  color: #03543f;
  background-color: #b8e0f7;
`;

const DeleteButton = styled(ButtonText)`
  font-size: .875rem;
  padding: .6rem 1.2rem;
  color: #c11a47;
  background-color: #ffe8eb;
`;

const DataTable = ({
  data, admin, openModal, fieldsShown, editFields, createFields,
  deleteModalMessage, editModalMessage, createModalMessage,
  deleteAction, createAction, editAction,
}) => {
  const tableContent = data.map((item) => {
    const newContent = {};
    for (let i = 0; i < fieldsShown.length; i += 1) {
      newContent[fieldsShown[i]] = item[fieldsShown[i]];
    }

    return newContent;
  });

  const modalCreateFields = Object.fromEntries(createFields.map((field) => [field, '']));
  const modalEditFields = (row) => Object.fromEntries(
    editFields.map((field) => [field, row[field]]),
  );
  const headers = tableContent[0] && Object.keys(tableContent[0]);
  return (
    <TableWrapper>
      <thead>
        <TableHeadRowWrapper className="first-row last-row">
          {
            headers && (headers.length > 0) && headers.map((header, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={`${header}-${index}`}>
                <TableHeadCell
                  className={
                    (index === 0)
                      ? 'first-item'
                      : ((index === headers.length - 1) ? 'last-item' : null)
                  }
                >
                  {headers[index].toUpperCase()}
                </TableHeadCell>
              </React.Fragment>
            ))
          }
          {
            admin && (
              <TableHeadCell>
                <CreateButton
                  type="secondary"
                  onClick={() => (
                    openModal({
                      type: 'create',
                      open: true,
                      details: modalCreateFields,
                      message: createModalMessage,
                      action: createAction,
                    })
                  )}
                >
                  Add
                </CreateButton>
              </TableHeadCell>
            )
          }
        </TableHeadRowWrapper>
      </thead>
      <tbody>
        {
          tableContent.length > 0 && tableContent.map((row, index) => (
            <React.Fragment key={row.id}>
              <TableBodyRowWrapper className={(index === 0) ? 'first-row' : ((index === tableContent.length - 1) ? 'last-row' : null)}>
                {
                  headers.length > 0 && headers.map((column, columnIndex) => (
                    <React.Fragment key={column}>
                      <TableBodyCell className={(columnIndex === 0) ? 'first-item' : ((columnIndex === headers.length - 1) ? 'last-item' : null)}>
                        {row[column]}
                      </TableBodyCell>
                      {
                        (columnIndex === headers.length - 1) && (
                          <TableBodyCell className={(columnIndex === 0) ? 'first-item' : ((columnIndex === headers.length - 1) ? 'last-item' : null)}>
                            <HorList spacing={10} leftStart>
                              <EditButton
                                type="secondary"
                                onClick={() => (
                                  openModal({
                                    type: 'edit',
                                    open: true,
                                    details: modalEditFields(row),
                                    message: editModalMessage,
                                    action: editAction,
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
                                    message: deleteModalMessage,
                                    action: deleteAction,
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
  fieldsShown: [],
  editFields: [],
  createFields: [],
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  admin: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
  fieldsShown: PropTypes.arrayOf(PropTypes.string),
  createFields: PropTypes.arrayOf(PropTypes.string),
  editFields: PropTypes.arrayOf(PropTypes.string),
  createModalMessage: PropTypes.string.isRequired,
  editModalMessage: PropTypes.string.isRequired,
  deleteModalMessage: PropTypes.string.isRequired,
  deleteAction: PropTypes.func.isRequired,
  createAction: PropTypes.func.isRequired,
  editAction: PropTypes.func.isRequired,
};

export default DataTable;
