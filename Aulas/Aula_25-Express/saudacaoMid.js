function saudacao(nome){
    return (req, res, next) => {
        console.log(`Olá, seja bem-vindo(a), ${nome}!`);
        next();
    }
}
module.exports = saudacao;