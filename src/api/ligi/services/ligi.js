'use strict';

/**
 * ligi service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ligi.ligi');
