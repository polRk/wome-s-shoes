import { GraphQLClient } from 'graphql-request'
import { Container } from 'inversify'
import 'reflect-metadata'
import { IProductRepository, ProductRepository } from './repository/product_repository'
import { TYPES } from './types'

export const container = new Container()

const hasuraApiClient = new GraphQLClient(process.env.GRAPHQL_API_URL || 'localhost:8080', {
  headers: {
    'X-Hasura-Admin-Secret': process.env.GRAPHQL_API_SECRET || '',
  },
})

container.bind<GraphQLClient>(TYPES.Client).toConstantValue(hasuraApiClient)
container.bind<IProductRepository>(TYPES.ProductRepository).to(ProductRepository)
