var config = require('./dbconfig');
const sql = require("mssql");

async function getdata() {
    try {
        console.log("sql server connected............");
        let pool = await sql.connect(config);//通过dbconfig连接数据库
        let res = await pool.request().query("SELECT * FROM dbo.customer ORDER BY id desc");
        return res.recordsets;
    } catch (error) {
        console.log("mathus-error :" + error);
    }
}
async function adddata(data) {
    try {
        console.log("添加的数据", data.body)
        let pool = await sql.connect(config);//通过dbconfig连接数据库
        let res = await pool.request().query("INSERT INTO dbo.customer (name,useid,adress,password) VALUES('" + data.body.name + "','" + data.body.useid + "','" + data.body.adress + "','" + data.body.password + "')");
        return res.rowsAffected;
    } catch (error) {
        console.log("mathus-error :" + error);
    }
}
async function deletedata(data) {
    try {
        console.log("sql server connected............");
        console.log("需要删除的数据", data.body.id);
        let pool = await sql.connect(config);
        let res = await pool.request().query("DELETE FROM dbo.customer WHERE id = '" + data.body.id + "'");
        console.log("shuanchude de ", res)
        return res.rowsAffected;
    } catch (error) {
        console.log("mathus-error :" + error);
    }
}
module.exports = {
    getdata: getdata,
    adddata: adddata,
    deletedata: deletedata,
}