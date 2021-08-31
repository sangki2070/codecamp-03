export default function AuthnumberPageLet (){

    function aaa(){

        const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("Authnumber").innerText = token
        

    }  


    return(

        <div>
            <div id="Authnumber">000000</div>
            <button onClick={aaa}>인증번호 전송</button>

        </div>
    )

}