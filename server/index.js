import http from 'http';
import {get} from './methods/index.js'

const port = 3000;
const successCode = 200;
const headerContent = {
  'Content-Type': 'application/json; charset=utf-8'
};

const narutoCharacters = {
  naruto: {
    name: 'Naruto Uzumaki',
    age: 17,
    village: 'Konoha',
    abilities: ['Shadow Clone Jutsu', 'Rasengan', 'Sage Mode']
  },
  sasuke: {
    name: 'Sasuke Uchiha',
    age: 17,
    village: 'Konoha',
    abilities: ['Sharingan', 'Chidori', 'Susanoo']
  },
  sakura: {
    name: 'Sakura Haruno',
    age: 17,
    village: 'Konoha',
    abilities: ['Medical Ninjutsu', 'Superhuman Strength', 'Chakra Control']
  },
  gaara: {
    name: 'Gaara',
    age: 17,
    village: 'Sunagakure',
    abilities: ['Sand Manipulation', 'Shield of Sand', 'Desert Coffin']
  }
};


const server = http.createServer((req, res) => {
  const host = req.headers.host;
  const baseUrl = `http://${host}/`;
  const parseUrl = new URL(req.url, baseUrl);
  const caminho = parseUrl.pathname;
  const partes = caminho.split('/');
  const section = partes[1] || '';

  if (section.toLowerCase() === 'characters') {
    const parametro = partes[2] || 'naruto';
    const character = narutoCharacters[parametro.toLowerCase()];

    if (!character) {
      res.writeHead(404, headerContent);
      res.end(JSON.stringify({ error: 'Personagem nao encontrado' }));
      return;
    }
   
     get(successCode, headerContent, character, res);

    return;
  }

  res.writeHead(successCode, headerContent);
  res.end(
    JSON.stringify('Bem-vindo! selecione um personagem de Naruto para comecar')
  );
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});