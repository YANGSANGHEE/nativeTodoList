const express = require('express');
const conn = require('./dbconnect');
const app = express();
const port = process.env.PORT || 8084;

//조회
app.get('/todoread', (req, res) => {
  conn.query('SELECT * FROM TODO', (err, rows) => {
    if (err) throw err;
    let data = rows;
    //data 조회 실패시 상태코드 및 멘트 처리
    if (!data) {
      return res.status(404).send('데이터 조회 오류입니다.');
    }
    res.send(data);
  });
});

//글쓰기
app.post('/todowrite', (req, res) => {
  let query = 'INSERT INTO todo (con,nowDate,state) VALUES (?,?,?)';
  let con = req.body.con;
  let nowDate = req.body.nowDate;
  let insertData = [con, nowDate];

  conn.query(query, insertData, (err, row, field) => {
    if (err) throw err;
    console.log(row);
  });
});

//수정
app.post('/todoupdate/:id', (req, res) => {
  //게시글 여부 조회
  conn.query(`SELECT * FROM todo WHERE id = ${req.params.id}`, (err, row) => {
    if (err) throw err;
    let data = row;
    if (!data) {
      res.status('404').send('해당 게시글이 존재하지 않습니다.');
    }
    let updateQuery = `UPDATE todo SET con = ?,nowDate = ? WHERE id = ${req.params.id}`;
    let con = req.body.con;
    let nowDate = req.body.nowDate;
    let insertData = [con, nowDate];

    conn.query(updateQuery, insertData, (err, row, field) => {
      if (err) throw err;
      console.log(row);
    });
    res.send(data);
  });
});

//삭제
app.post('/tododelete/:id', (req, res) => {
  conn.query(`SELECT * FROM todo WHERE id = ${req.params.id}`, (err, row) => {
    if (err) throw err;
    const data = row;
    if (!data) {
      res.status('404').send('삭제할 데이터가 존재하지 않습니다.');
    }
    conn.query(`DELETE FROM todo WHERE id = ${req.params.id}`, (err, row) => {
      if (err) throw err;
    });
    res.json('delete:' + req.params.id);
  });
});

//체크 여부
app.post('/todocheck/:id', (req, res) => {
  conn.query(
    `UPDATE todo SET state = CASE WHEN state = 'N' THEN 'Y' ELSE 'N' END WHERE id = ${req.params.id}`,
  );
});

app.listen(port, err => {
  if (err) throw err;
  console.log(`server is running ${port}`);
});
