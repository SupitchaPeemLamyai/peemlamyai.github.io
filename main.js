document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#studentForm').onsubmit = function (event) {
        event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บเมื่อกด submit

        const name = document.querySelector('#name').value; // รับค่า name จากฟอร์ม
        const id = document.querySelector('#id').value; // รับค่า id จากฟอร์ม

        // ส่งข้อมูลแบบ POST ไปยัง API
        fetch("https://206.189.146.138/api/students ", { 
            method: "POST", 
            body: JSON.stringify({ 
                id: id, 
                name: name
            }), 
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        })
        .then(response => response.json()) 
        .then(json => {
            console.log(json); // แสดงผลลัพธ์จาก API ใน console
            alert(`Data submitted: ${json.name} with ID ${json.id}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
});