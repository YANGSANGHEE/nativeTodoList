const express = require('express');
const conn = require('./dbconnect');
const bodyParser = require('body-parser');
//body parser ** 중요
const app = express();
const port = process.env.PORT || 8084;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//조회
app.get('/todoread', (req, res) => {
  conn.query('SELECT * FROM todo', (err, rows) => {
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
  let con = req.body.con;
  console.log(con);
  conn.query(
    `INSERT INTO todo (con,nowDate) VALUES ('${con}',now())`,
    (err, row, field) => {
      if (err) throw err;
      console.log(row);
    },
  );
});

//수정
app.post('/todoupdate/:id', (req, res) => {
  //게시글 여부 조회
  conn.query(`SELECT * FROM todo WHERE id = ${req.params.id}`, (err, row) => {
    if (err) throw err;
    let data = row;
    console.log(data);
    if (!data) {
      res.status('404').send('해당 게시글이 존재하지 않습니다.');
    }
    let con = req.body.con;
    conn.query(
      `UPDATE todo SET con = ${con}, nowDate = now() WHERE id = ${req.params.id}`,
      (err, row, field) => {
        if (err) throw err;
        console.log(row);
      },
    );
    res.send('수정 완료');
  });
});

//삭제
app.get('/tododelete/:id', (req, res) => {
  conn.query(`SELECT * FROM todo WHERE id = ${req.params.id}`, (err, row) => {
    if (err) throw err;
    const data = row;
    if (!data) {
      res.status('404').send('삭제할 데이터가 존재하지 않습니다.');
    }
    conn.query(`DELETE FROM todo WHERE id = ${req.params.id}`, (err, row) => {
      if (err) throw err;
      console.log('삭제완료');
    });
    res.json('delete:' + req.params.id);
  });
});

//체크 여부
app.get('/todocheck/:id', (req, res) => {
  conn.query(
    `UPDATE todo SET state = CASE WHEN state = 'N' THEN 'Y' ELSE 'N' END WHERE id = ${req.params.id}`,
    (err, row) => {
      if (err) throw err;
    },
  );
});

app.listen(port, err => {
  if (err) throw err;
  console.log(`server is running ${port}`);
});
