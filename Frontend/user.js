//load users ทั้งหมดจาก api เส้น http://localhost:8000/users

//นำ user ที่ได้มาแสดงบนหน้าเว็บ

const BASE_URL = 'http://localhost:8000'

window.onload = async () =>{
    const response = await axios.get(`${BASE_URL}/users`)
    console.log(response.data)
    const userDOM = document.getElementById('user')

    let htmlData = '<div>'
    for(let i = 0; i <response.data.length; i++){
        let user = response.data[i]
        htmlData += `<div>
        ${user.firstname}${user.lastname}
        <button>Edit</button>
        <button class="delete" data-id='${user.id}'>Delete</button>
        </div>`
    }
    htmlData += '</div>'
    userDOM.innerHTML = htmlData

    const deleteDOMs = document.getElementsByClassName("delete")
    for(let i = 0; i < deleteDOMs.length; i++){
        deleteDOMs[i].addEventListener("click", async (event) => {
            //ดึง รก ของ user ที่ต้องการลบจาก data-id attribute
            const id = event.target.dataset.id
            try{
                await axios.delete(`${BASE_URL}/users/${id}`)
                loadData()
            }catch(error){
                console.error("Error deleting user: ", error)
            }
        })
    }
}