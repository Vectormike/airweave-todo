import Arweave from 'arweave/web';

const arweave = Arweave.init({
  host: '127.0.0.1',
  port: 1984,
  protocol: 'http',
  // timeout: 20000,
});

export default arweave;
