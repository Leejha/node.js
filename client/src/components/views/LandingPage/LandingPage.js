import React,{useEffect} from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const apiUrl = 'https://5000-teal-fox-mayilo51.ws-us13.gitpod.io';


function LandingPage(props) {
    useEffect(() => {
        const reqUrl = apiUrl + '/api/hello'
        axios.get(reqUrl)
        .then(response => { console.log(response)})
    }, [])

    const onClickHandler = () =>{
        const reqUrl = apiUrl + '/api/users/logout'
        axios.get(reqUrl)
        .then( response => {
            if (response.data.success) {
                props.history.push('/login')
            }
            else {
                alert('로그아웃 실패')
            }
        })
    }

    return (
        <div style = {{
            display : 'flex', justifyContent: 'center', alignItems : 'center',
            width : '100%', height : '100vh'
        }}>
            <h2>시작 페이지</h2>

            <button onClick = {onClickHandler}>
                로그아웃
            </button>



        </div>
        )
}

export default withRouter(LandingPage)
