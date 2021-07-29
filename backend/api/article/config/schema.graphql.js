/* eslint-disable */
const { sanitizeEntity } = require('strapi-utils');
module.exports = {
  query: `
    articleBySlug(slug: String!): Article
  `,
  mutation: `
    increaseLikes(id: ID!): Article
  `,
  resolver: {
    Query: {
      articleBySlug: {
        description: 'Return the article by slug',
        resolverOf: 'Article.findOne', 
        resolver: async (obj, {slug}, ctx) => {
          // ctx is the context of the Koa request.
          
          const entity = await strapi.query('article').findOne({slug})

          return sanitizeEntity(entity, { model: strapi.models.article });
        }
      },
    },
    Mutation: {
      increaseLikes: {
        description: 'Increase article likes',
        resolverOf: 'Article.update',
         resolver: async (obj, {id}, ctx) => {
          // ctx is the context of the Koa request.
          
          const entity = await strapi.query('article').findOne({id})
          const entityLikes = entity.likes;
          const newEntity = await strapi.query('article').update({ id }, { ...entity, likes: parseInt(entityLikes || 0) + 1 })
          return sanitizeEntity(newEntity, { model: strapi.models.article });
        }
      }
    }
  },
};
