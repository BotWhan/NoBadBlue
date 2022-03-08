handlers.colors = function (payload) {
  var fn = function (color) {
      return 'rgb(' + color.join() + ')';
  };

  var result = _.map(payload, function (element) {
      return {
          taken: element.taken,
          color: fn(element.primary),
          secondary: _.map(element.secondary, fn)
      };
  });
  var x = result.pop()
  model.colors(result);
}

// self.unreadyAllPlayers = function()
// {
//     debug_log('unreadyAllPlayers');

//     _.forIn(self.players, function (element)
//     {
//         if (element.ready && !element.ai)
//         {
//             server.broadcastEventMessage(element.client.name, ' is no longer ready.');
//             element.ready = false;
//         }
//     });

//     self.setDirty({ players: true });
//     self.updatePlayerState();
// };