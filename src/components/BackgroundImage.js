function BackgroundImage(data) {
  let id = 0;
  if (!Array.isArray(data) && data.list[0].weather[0].id) {
    id = data.list[0].weather[0].id;
  }
  function getImageUrl(weatherId) {
    // id classification https://openweathermap.org/weather-conditions
    if (weatherId >= 200 && weatherId < 300) {
      return 'https://i.gifer.com/Rnim.gif'; // thunderstorm
    } else if (weatherId >= 300 && weatherId < 400) {
      return 'https://www.shutterstock.com/image-photo/light-drizzle-view-600w-2053535987.jpg'; // drizzle
    } else if (weatherId >= 500 && weatherId < 600) {
      return 'https://samitivej-prod-new-website.s3.ap-southeast-1.amazonaws.com/public/uploads/descriptions/1a2e1c368b9a82a61d68227e537c5c9a.jpg'; // rain
    } else if (weatherId >= 600 && weatherId < 700) {
      return 'https://i.gifer.com/YY5R.gif'; // snow
    } else if (weatherId >= 700 && weatherId < 800) {
      return 'https://i.gifer.com/604.gif'; // strong wind
    } else if (weatherId === 800) {
      return 'https://i.gifer.com/Lx0q.gif'; // clear day Image
    } else {
      return 'https://cdn.pixabay.com/photo/2019/07/13/15/27/scotland-4335030_1280.jpg'; // cloudy day
    }
  }

  return getImageUrl(Number(id));
}

export default BackgroundImage;
