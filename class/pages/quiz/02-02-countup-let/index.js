export default function LetCoutupPage(){

    function aaa(){
        let count = Number(document.getElementById("number").innerText) + 1
        document.getElementById("number").innerText=count

    }


    return(
        
        <div>
            <div id="number">0</div>
            <button onClick={aaa}>카운트증가</button>
        </div>
        
    )
}