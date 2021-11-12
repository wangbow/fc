const readline = require('readline');

export async function getStdin() {
  let msg = '';
  let msgStr = '';
  let msgArr = [];
  const { stdin, stdout } = process;
  stdin.setEncoding('utf8');

  return new Promise((resolve) => {
    readline.emitKeypressEvents(process.stdin);
    // process.stdin.setRawMode(true);

    stdin.on('keypress', (str, key) => {
      if (key?.name === 'enter') {
        stdout.write('99999999:');
        // TODO: 回车
        console.log('TODO: 回车 msg:: ', msg);
        console.log('TODO: 回车 msgStr:: ', msgStr);
        console.log('TODO: 回车 msgArr:: ', msgArr, msgArr.length);
        // const msgUint8 = new Uint8Array(msgArr);
        msg = '';
        msgStr = '';
        msgArr = [];
      } else if (key?.ctrl && key?.name === 'c') {
        readline.emitKeypressEvents('');
        resolve(msg);
      } else if ((key?.ctrl && key?.name === 'd')) {
        process.exit();
      } else {
        msg += key?.name;
        msgStr += str;
        msgArr.push(key?.sequence);
      }
    });
  });
}
