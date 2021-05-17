/* eslint-disable */
const { sanitizeEntity } = require('strapi-utils');
module.exports = {
  query: `
    articleBySlug(slug: String!): Article
  `,
  resolver: {
    Query: {
      articleBySlug: {
        description: 'Return the article by category',
        resolverOf: 'Article.findOne', 
        resolver: async (obj, {slug}, ctx) => {
          // ctx is the context of the Koa request.
          
          const entity = await strapi.query('article').findOne({slug})

          console.log(entity)
          return sanitizeEntity(entity, { model: strapi.models.article });
        }
      },
    },
  },
};
