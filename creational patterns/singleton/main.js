class Singleton {
  instance;

  constructor() {}

  getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

const isSingleton = () => {
  const s1 = new Singleton();
  const s2 = new Singleton();

  if (s1 !== s2) {
    console.log("Singleton works");
  } else {
    console.log("Singleton failed");
  }
};

isSingleton();
