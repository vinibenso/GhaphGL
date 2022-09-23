const perfis = [
  { id: 1, name: 'comum', }, { id: 2, name: "Administrador" }]

const users = [{
  id: 1,
  name: 'Joao Silva',
  email: 'jsilva@gmail.com',
  age: 29,
  perfil_id: 1,
  status: 'ACTIVE'
}, {
  id: 2,
  name: 'Rafae Junior',
  email: 'rjunior@gmail.com',
  age: 18,
  perfil_id: 2,
  status: 'INACTIVE'
}, {
  id: 3,
  name: 'Daniele Brito',
  email: 'dbrito@gmail.com',
  age: 35,
  perfil_id: 1,
  status: 'BLOCKED'
}]

module.exports = {users, perfis }
