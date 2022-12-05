
  var containerId = "buzzsprout-small-player-tags-n-iot"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1727692/11374816-norse-iot-club-making-the-future?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1727692.js%3Fartist%3D%26container_id%3Dbuzzsprout-small-player-tags-n-iot%26player%3Dsmall%26tags%3Dn-iot\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"Informatics Cafe - A Taste of Informatics, Norse IoT Club: Making the Future\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

