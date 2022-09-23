const { users, perfis } = require('../data/db')

module.exports = {
      ola() {
        return "Basta retornar uma string."
      },
      horaAtual() {
        return new Date
      },
      loggedUser() {
        return {
          id: 1,
          name: "Vini",
          email: "vini@gmail.com",
          age: 36,
          salary: 5547.22,
          vip: true
        }
      },
      featuredProduct() {
        return {
          name: "mouse",
          price: 247.55,
          discount: 0.15,
        }
      },
      numerosMegaSena() {
        // return [4, 8, 13, 27, 33, 54]
        const crescente = (a, b) => a - b
        return Array(6).fill(0)
          .map(n => parseInt(Math.random() * 60 + 1))
          .sort(crescente)
      },
      users() {
        return users
      },
      user(_, args) {
        const select = users
          .filter(u => u.id == args.id)
        return select ? select[0] : null
      },
      perfis() {
        return perfis
      },

      perfil(_, { id }) {
        const select = perfis
          .filter(p => p.id === id)
        return select ? select[0] : null
      }
    }
  
