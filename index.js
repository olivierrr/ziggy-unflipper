module.exports = function(ziggy) {
  ziggy.on('message', function (user, channel, message) {
    var tablesFlipped = message.split('').filter(function(c){return c === '┻'})
    tablesFlipped = tablesFlipped.slice(Math.floor(tablesFlipped.length/2))
    ziggy.say(channel, tablesFlipped.map(function(){ return '┬─┬ノ( º _ ºノ)'}).join(' '))
  })
}