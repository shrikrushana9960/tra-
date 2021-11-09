const client = require("./databaseconfig");
const cassandra = require("cassandra-driver");
const Mapper = cassandra.mapping.Mapper;
const mapper = new Mapper(client, {
  models: { TransformStream: { tables: ["tra"] } },
});
const userMapper = mapper.forModel("tra");
module.exports = userMapper;
