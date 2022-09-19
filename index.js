const { ApolloServer, gql } = require ('apollo-server')

const typeDefs =gql`
  #scalar Date para poder retornar um Date ja que no graphql nao aceita.
  scalar Date

  #criando tipo/ a exclamcao indica q é obrigatorio
  type User {
    id: ID
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
  }

  type Product {
    name: String!
    price: Float!
    discount: Float
    priceWithDiscount: Float
  }

  #Pontos de entrada da sua API!
  type Query {
    ola: String
    horaAtual:  Date
    loggedUser: User
    featuredProduct: Product

  }
`

const resolvers = {

  Product: {
    priceWithDiscount(product) {
      if(product.discount){
        return product.price
          * (1 - product.discount)
      } else {
        return product.price
      }
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
    } 
  }
}

const server = new ApolloServer({
  typeDefs, 
  resolvers
})

server.listen().then(({url}) =>{
  console.log(`Executando em ${url}`)
})
