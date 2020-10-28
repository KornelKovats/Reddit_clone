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
  db.createTable('votes', {
    id: { type: 'int', primaryKey: true, autoIncrement: true},  
    post_id: { type: 'int', foreignKey: {
      name: 'post_fk',
      table: 'posts',
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      }, 
      mapping: 'id'
    }
  },
    user_id : { type: 'int', foreignKey: {
      name: 'user_fk',
      table: 'users',
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      }, 
      mapping: 'id'
    }
  },
  score: 'int', 

  }, callback);
};


exports.down = function (db, callback) {
  db.dropTable('votes', callback);
};

exports._meta = {
  "version": 1
};
