import arweave from './arweave';
import ArDB from 'ardb';
import { v4 as uuidv4 } from "uuid";
import { getAppName, getVersionName } from './utils';

const ardb = new ArDB(arweave);

//  const [todos, setTodos] = useState<Todo[]>([]);
//   const [task, setTask] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [connected, setConnected] = useState(false);


export const getWalletAddress = async (wallet) => arweave.wallets.jwkToAddress(wallet);

export const Upload = async (newTodo, key) => {
  const tx = await arweave.createTransaction({
    data: JSON.stringify({
      id: uuidv4(),
      task: newTodo.task,
      completed: newTodo.complete,
    }),
  });

  tx.addTag('App-Name', getAppName());
  tx.addTag('App-Version', getVersionName());
  tx.addTag('Type', 'Todo');

  await arweave.transactions.sign(tx, key);
  await arweave.transactions.post(tx);

  return true;
};

export const GetTodos = async () => {
  try {
    let txs = await ardb.search('transactions').tag('App-Name', getAppName()).tag('App-Version', getVersionName()).tag('Type', 'Todo').findAll();

    let todos = [];
    let loading = false;
    txs.forEach((tx, index) => {
      arweave.transactions.getData(tx.id, { decode: true, string: true }).then((res) => {
        tx = JSON.parse(res);
        if (index < 3) {
          tx.tag.push('New');
        }
        todos[index] = tx;
      });
    });
    return {todos, loading};
  } catch (err) {
    console.log(err);
  }
};

