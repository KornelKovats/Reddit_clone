'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('posts', {
    id: { type: 'int', primaryKey: true, autoIncrement: true},  
    title: 'string',
    url: 'string',
    datetime: 'date',
    score: 'int', 
    user_id : { type: 'int', foreignKey: {
      name: 'user_fk_to_post_id',
      table: 'users',
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      }, 
      mapping: 'id'
      }, 
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('posts', callback);
};

exports._meta = {
  "version": 1
};
