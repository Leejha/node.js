const { User } = require('../models/User');


let auth = (req, res, next) => {
    let token = req.cookies.x_auth;

    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth : false, error : true})

        req.token = token;
        req.user = user;
        next();

    })
}

module.exports = { auth }

// 안녕하세요 강사님. auth.js 에서 Userd의 findbyToken 메소드를 사용하는 과정에 질문이 생겨 이렇게 댓글 남깁니다. findbyToken메소드를 호출하고 콜백 함수를 작성할때  
// req의 token 과 user 라는 데이터에 접근하여 각각 토큰과 user 데이터를 넣어주는데, 이 때 req에 어떻게 token과 user가 존재하는지 궁금합니다. 해당 미들웨어는 index.js의 
// '/api/middleware/auth를 라우팅 해주는 app.get 메소드에서 호출되는데, 이 app.get 메소드에서 작성된 콜백 함수를 보면 단순히 req를 파라미터로 받는것 뿐이지, 해당 파라미터의 구조를 따로 작성해주지는 않았습니다.
//  그런데 어떻게 token과 user에 접근하는지, 만약 req에 미리 정의된 구조였다면 그 req에 대한 자세한 정보는 어디서 어떻게 확인할 수 있는지 궁금합니다.


// 3개월 전(수정됨)
// express 공식문서의 app.get() 메서드를 살펴보면 인자로 http get을 요청할 path 경로와 콜백 함수를 받을 수 있게 되어 있습니다.
// 콜백함수는 여러개를 받을 수 있는데 각 콜백함수들은 순서대로 실행이 되고 다음 콜백함수로 그 값이 이전됩니다. 이때 사용되는게 next() 메서드입니다.

// auth 함수에서 findByToken 메서드가 실행되면 var user = this;가 처음으로 실행되는데 이때 login에서 생성된 user정보와 token 정보가 불러와집니다.
// auth 함수는 로그인이 진행된 다음에 진행이 되므로 user 정보와 token 정보를 가지고 있는 상태인거죠.

// index.js 파일에서 app.get("/api/users/auth", auth, (req, res) => {...}) 메서드의 (req,res) 부분은 파라미터가 아니라 인자로 정해져 있는 문법일겁니다.