exports.up = function(knex) {
  return knex.schema.createTable("users", function(table) {
    table.increments();
    table.string("name");
    table.decimal("own").defaultTo(0);
    table.decimal("disown").defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
