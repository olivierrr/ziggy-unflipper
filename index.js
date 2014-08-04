module.exports = cool
var rx = /(┻)/g

function cool(ziggy) {
  ziggy.on('message', parseMessage)

  function parseMessage(user, channel, message) {

    if(message.match(rx)) {
      var rxMatches = Math.floor(message.match(rx).length/2)
      , reply = ''

      if(rxMatches > 0) {
        for(var i=0; i<rxMatches; i++) {
          reply += '┬─┬ノ( º _ ºノ) '
        }
        ziggy.say(channel, reply)
      }
    }
  }
}