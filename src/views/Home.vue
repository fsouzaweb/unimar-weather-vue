<template>
  <div class="home-container">
    <h1>Previsão do Tempo</h1>
    <img src="@/assets/weather.png" alt="Imagem relacionada ao clima" class="climate-image" />
    <br>
    <router-link to="/weather" class="weather-link">Ver Previsão</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 50px;
}

.climate-image {
  max-width: 100%;
  height: 150px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.weather-link {
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  background-color: #007BFF;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.weather-link:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.weather-link:active {
  transform: translateY(0);
}
</style>
