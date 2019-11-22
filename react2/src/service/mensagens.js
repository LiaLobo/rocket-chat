import axios from 'axios'

//Isso é fixo e tem que ser escrito exatamente como está abaixo. Conforme a requisição que formos fazer precisamos olhar a documentação para ver qual a base dela
//São as configurações básicas para a requisição
const config = {
    baseURL: 'https://my-json-server.typicode.com',
    //É o tempo para ter a resposta da request. Caso não retorne nesse tempo é mostrado um erro
    timeout: 1000
}

const protocolo = axios.create(config)

export function getMensagens () {
  const url = '/reprograma/T8-React-II/mensagens'
  return protocolo.get(url)
}