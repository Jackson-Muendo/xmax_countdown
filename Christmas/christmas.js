body {
  background-color: #f6f6f6;
  padding: 0;
  margin: 0;
  font-family: 'Ubuntu';
}

#main {
  width: 100%;
  height: 100vh;
  background-image: url('https://source.unsplash.com/random/1000x1000');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.countdownContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(255,255,255,0.5);
  padding: 20px;
  border-radius: 5px;
}

.christmas {
  font-size: 4rem;
  text-transform: uppercase;
}
.counter {
  font-size: 4rem;
}

@media (max-width: 1200px) {
  
  .christmas {
    font-size: 3rem;
    text-transform: uppercase;
  }
  .counter {
    font-size: 2rem;
  }
}
