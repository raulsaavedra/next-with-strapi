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
          const entity = await strapi.services.article.findOne({slug})

          return sanitizeEntity(entity, { model: strapi.models.article });
        }
      },
    },
  },
};
