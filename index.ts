
import { parseArgs } from 'util';
import { getHashedValue } from './getHashedValue';


const { values } = parseArgs({
  args: Bun.argv,
  options: {
    path: {
      type: 'string',
    },
  },
  strict: true,
  allowPositionals: true,
});

const file = Bun.file(values.path)

const text = await file.text()
const list = text.split('\n')

const hashedList = list.map((value) => getHashedValue(value))
const newName = values.path.replace('.csv', '_hashed.csv')

Bun.write(newName, hashedList.join('\n'))
