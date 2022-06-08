'use strict';

/**
 * futzal service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::futzal.futzal');
