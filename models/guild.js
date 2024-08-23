const moongose = require ('mongoose');

const guildSchema = moongose.Schema({
  id : String,
  prefix: { 'type': String, 'default': '!' },
  logChannel: { 'type': String, 'default': '366586447295414274' }
});

module.exports = moongose.model('guild', guildSchema);