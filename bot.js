client.on('message', message => {
  if (message.channel.id === "612798308070457367") {
    message.react('☑')
      .then(() => {
        message.react('🚫')
      });
  }
});
