class Singleton {
  private static instance: Singleton;

  constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) Singleton.instance = new Singleton();
    return Singleton.instance;
  }
}

const isSingleton = (): void => {
  const s1 = new Singleton();
  const s2 = new Singleton();

  if (s1 !== s2) {
    console.log("Singleton works");
  } else {
    console.log("Singleton failed");
  }
};

isSingleton();
