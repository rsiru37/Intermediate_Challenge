const getWeb3 = async => {
    return new Promise(async(resolve, reject) => {
        const web3 = new Web3(window.ethereum)
        try{
            await window.ethereum.request({ method: "eth_requestAccounts"})
            console.log(web3);
            resolve(web3)
        } catch(error){
            reject(error)
        }
    })
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("raj").addEventListener("click", async () => {
        const web3 = await getWeb3();
        const waladd= await web3.eth.requestAccounts();
        const walbal= await web3.eth.getBalance(waladd[0])/10**18;
        console.log(waladd);
        console.log(walbal);
        document.getElementById("add").innerText=waladd;
        document.getElementById("bal").innerText=walbal;
    })
})
