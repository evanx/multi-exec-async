
module.exports = (client, closure) => {
    const multi = client.multi();
    closure(multi);
    return new Promise((resolve, reject) => multi.exec((err, result) => err ? reject(err) : resolve(result)));
};

