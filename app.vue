<script setup>
  import { ref } from 'vue';
  const config = useRuntimeConfig();
  
  const isLoading = ref(true);

  const date = new Date();
  const datetime = date.toDateString();
  const time = date.toLocaleTimeString();


  let location = ref('');
  let temp = ref('');
  let weatherIcon = ref('');
  let description = ref('');
  async function loadWeather() {
    try {
      isLoading.value = true;
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=' + config.public.cityID + '&appid=' + config.public.openweatherApiSecret);
      const data = await response.json();
      location = data.name;
      weatherIcon = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
      temp = Math.round(parseFloat(data.main.temp) - 273.15);
      description = data.weather[0].description;
    } catch(e) {
      console.error('Error: ', e)
    }
    finally {
      isLoading.value = false;
    }
  };

  loadWeather();
</script>

<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <header>
      <section id="date-time">
        <h2>{{ datetime }} {{  time }}</h2>
      </section>
      <section v-if="!isLoading" id="weather">
        <h2>{{ location }} | {{ temp }}°C | {{ description }} <img :src="weatherIcon"> </h2>
      </section>
    </header>

    <section id="search">
      <h2>Search</h2>
      <form action="https://duckduckgo.com/" method="get">
        <input type="text" id="q" name="q" autofocus>
        <button tabindex="-1">Search</button>
      </form>
    </section>

    <section id="bookmarks">
      <h2>Bookmarks</h2>
      <ul>
        <li>
          <a href="https://www.reddit.com"><img src="https://icons.duckduckgo.com/ip3/reddit.com.ico" class="favicon" alt="Reddit favicon">Reddit</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://www.youtube.com"><img src="https://icons.duckduckgo.com/ip3/youtube.com.ico" class="favicon" alt="YouTube favicon">YouTube</a>
        </li>
        <li>
          <a href="https://www.twitch.tv"><img src="https://icons.duckduckgo.com/ip3/twitch.tv.ico" class="favicon" alt="Twitch favicon">Twitch</a>
        </li>
      </ul>
    </section>
  </div>  
</template>
