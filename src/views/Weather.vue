<template>
  <div class="weather-container">
    <h1>Previsão do Tempo</h1>
    <input v-model="city" placeholder="Digite a cidade e pressione Enter" class="weather-input" @keyup.enter="getWeather" />
    <button @click="getWeather" class="weather-button">Buscar Clima</button>

    <p v-if="inputError" class="input-error">{{ inputError }}</p>
    <div v-if="loading" class="loading">Carregando...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="weather" class="weather-info">
      <p class="city-name">Clima em {{ weather.name }}: <span class="weather-description">{{ weather.weather[0].description }}</span></p>
      <p class="temperature">Temperatura: {{ (weather.main.temp - 273.15).toFixed(1) }}°C</p>
    </div>
  </div>
</template>

<script>
import { useWeatherStore } from '@/stores/weatherStore';
import { computed, ref } from 'vue';

export default {
  name: 'WeatherView',
  setup() {
    const city = ref('');
    const inputError = ref('');
    const store = useWeatherStore();

    const getWeather = () => {
      if (!city.value) {
        inputError.value = 'Informe a cidade e pressione Enter.';
        return; // Impede o envio da requisição
      }

      inputError.value = '';
      store.fetchWeather(city.value);
    };

    return {
      city,
      getWeather,
      inputError,
      weather: computed(() => store.weather),
      loading: computed(() => store.loading),
      error: computed(() => store.error)
    };
  }
};
</script>

<style scoped>
.input-error {
  color: red;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}

.weather-container {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.weather-input {
  padding: 10px;
  font-size: 16px;
  width: 80%;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.weather-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #568bc4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.weather-button:hover {
  background-color: #0056b3;
}

.loading,
.error {
  margin-top: 20px;
  color: #ff0000;
}

.weather-info {
  margin-top: 20px;
  text-align: left;
  padding: 15px;
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.city-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.weather-description {
  font-size: 18px;
  margin-bottom: 5px;
  color: #555;
  text-transform: capitalize;
}

.temperature {
  font-size: 18px;
  font-weight: bold;
  color: #dd6b42;
}
</style>
