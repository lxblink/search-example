const brands = ['Samsung', 'Sony', 'Onida', 'Philips'];
const lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
  + 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown '
  + 'printer took a galley of type and scrambled it to ma';

const generateData = (length = 10) => new Array(length).fill(0)
  .map(() => {
    const rnd = Math.random();
    const id = Math.round(rnd * 100000);
    const brand = brands[Math.round(rnd * (brands.length - 1))];
    const size = Math.round(rnd * 80) + 10;
    const name = `${brand} TV ${size} inch`;
    const price = Math.round(rnd * 2000);

    return {
      id,
      name,
      price,
      description: `${name}${lorem}`,
    };
  });


const productList = generateData(20);


const filterData = (data, filter = {}) => (
  filter.name
    ? data.filter((i) => i.name.toLowerCase().includes(filter.name.toLowerCase()))
    : data
);

let apiTimer;

const api = {
  searchProducts(filter) {
    if (this.loadPromise) {
      this.cancelRequest();
    }

    const rndTime = Math.floor(Math.random() * (700 + 1) + 300);
    const data = filterData(productList, filter);
    this.loadPromise = new Promise((res, rej) => {
      apiTimer = setTimeout(() => res(data), rndTime);
      this.reject = rej;
    });

    return this.loadPromise;
  },

  cancelRequest() {
    clearInterval(apiTimer);
    this.reject();
    this.loadPromise = null;
  },
};

export default api;
