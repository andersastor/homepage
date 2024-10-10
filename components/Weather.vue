<script setup>
    const config = useRuntimeConfig();
    const response = await useFetch('https://api.openweathermap.org/data/2.5/weather?id=' 
                                    + config.public.cityID 
                                    + '&appid=' 
                                    + config.public.openweatherApiSecret);
</script>

<template>
    <div v-if="response">
        <h2>{{ response.data.value.name }} | 
            {{ Math.round(parseFloat(response.data.value.main.temp) - 273.15) }}°C | 
            {{ response.data.value.weather[0].description }} |
            <img :src="'https://openweathermap.org/img/wn/' + response.data.value.weather[0].icon + '.png'"> 
        </h2>
    </div>  
</template>
