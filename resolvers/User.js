const { perfis } = require('../data/db')

module.exports = {
  salary(user) {
    return user.real_salary
  },
  
  perfil(user) {
    const select = perfis
      .filter(p => p.id === user.perfil_id)
    return select ? select[0] : null
  }
}