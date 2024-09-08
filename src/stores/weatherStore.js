import { defineStore } from 'pinia';
import axios from 'axios';

export const useWeatherStore = defineStore('weatherStore', {
  state: () => ({
    weather: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetchWeather(city) {
      this.loading = true;
      this.error = null;
      try {
        const apiKey = process.env.VUE_APP_API_KEY; // API Key - https://home.openweathermap.org/api_keys
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`);
        this.weather = response.data;
      } catch (err) {
        this.error = 'Erro ao pesquisar, confira o nome da cidade e tente novamente!';
      } finally {
        this.loading = false;
      }
    }
  }
});
