module.exports =  {
    env: 'development',
    nomeApi: '',
    urlApi: 'http://localhost',
    portApi: 4569,
    tokenPrivateKey: new Buffer("string", "utf-8"),    
    dataConfig: {
        MYSQL: {
            database: 'nomeBanco',
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'root'
        }
    }
  };