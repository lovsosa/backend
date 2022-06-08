'use strict';

/**
 * secretariat service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::secretariat.secretariat');
