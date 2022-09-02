import React from 'react';

function UserList({ handleDeleteClick, users }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          { users && users.map((user, index) => {
            const { id, email, role, name } = user;
            if (user.role === 'administrator') return;
            return (
              <tr key={ user.id }>
                <td
                  data-testid={ `admin_manage__element-user-table-item-number-${index}` }
                >
                  {' '}
                  { id }
                  {' '}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-name-${index}` }
                >
                  {' '}
                  { name }
                  {' '}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-email-${index}` }
                >
                  {' '}
                  { email }
                  {' '}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-role-${index}` }
                >
                  {' '}
                  { role }
                  {' '}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                >
                  {' '}
                  <button
                    type="button"
                    onClick={ () => handleDeleteClick(id) }
                  >
                    Excluir
                  </button>
                  {' '}
                </td>
              </tr>
            );
          }) }
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
