const { ApolloServer, gql } = require('apollo-server')

const perfis = [
  { id: 1, name: 'comum', }, { id: 2, name: "Administrador" }]

const users = [{
  id: 1,
  name: 'Joao Silva',
  email: 'jsilva@gmail.com',
  age: 29,
  perfil_id: 1
}, {
  id: 2,
  name: 'Rafae Junior',
  email: 'rjunior@gmail.com',
  age: 18,
  perfil_id: 2
}, {
  id: 3,
  name: 'Daniele Brito',
  email: 'dbrito@gmail.com',
  age: 35,
  perfil_id: 1
}]

const typeDefs = gql`

  scalar Date

  type Product {
    name: String!
    price: Float!
    discount: Float
    priceWithDiscount: Float
  }

  type Perfil {
  id: Int
  name: String!
  }

  type User {
   id: ID
   name: String!
   email: String!
   age: Int
   salary: Float
   vip: Boolean
   perfil: Perfil
 }

  #Pontos de entrada da sua API!
  type Query {
    ola: String
    horaAtual:  Date
    loggedUser: User
    featuredProduct: Product
    numerosMegaSena: [Int!]!
    users: [User]
    user(id: ID): User
    perfis: [Perfil]
    perfil(id: Int): Perfil
    
  }

  `

const resolvers = {

  Product: {
    priceWithDiscount(product) {
      if (product.discount) {
        return product.price
          * (1 - product.discount)
      } else {
        return product.price
      }
    }
  },

  User: {
    salary(user) {
      return user.real_salary
    },
    perfil(user) {
      const select = perfis
        .filter(p => p.id === user.perfil_id)
      return select ? select[0] : null
    }
  },

  Query: {
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
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})
