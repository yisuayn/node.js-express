const config = {
    user: "sa",
    password: "xxxxxxxx",
    server: "xxxxxxxxx",
    database: "xxxxxxxxx",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        trustedConnection: true,//是否使用windows身份验证
        enableArithAbout: true,
        instancename: "",
        encrypt: true, // for azure
        trustServerCertificate: true //本地dev /自签名证书更改为true
    },
    port: 1433
};
module.exports = config;