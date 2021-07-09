// Bài 1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
// Đầu vào: str_input 
// Đầu ra: đảo ngược chuỗi và in ra kết quả
// Ví dụ:
// Cho: str_input = "program"; in ra: "margorp"
// Cho: str_input = "data"; in ra: "atad"
// Lưu ý: không sử dụng hàm reverse()


// function reverseString(){
//     let str = prompt("Nhập vào một chuỗi:");
//     let newstr ="";
//     for (let i = str.length-1;i>=0;i--){
//         newstr +=str[i]
//     }
//     return str;

// }
// console.log(reverseString());


// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (2đ)
// Đầu vào: str
// Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// Ví dụ
// Cho "this is Test"; In ra "This Is Test"
// Cho "hello a"; In ra "Hello A”



//  function toUperCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
        
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
    
//     return splitStr.join(' '); 
//  }
 
//  console.log(toUperCase("nguyen thu trang"));

// Bài 3 : Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
// Đầu vào: 1 mảng
// Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// Ví dụ
// Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]

// function myFunction(arr){
    
//     let newarr = [arr[0]];
//     for (let i=1; i<arr.length; i++) {
//         if (arr[i]!=arr[i-1]) {
//          newarr.push(arr[i]);
//         }
//     }
//     console.log(...newarr);
// }
// console.log(myFunction([1,2,2,3,4,5,5,5,6,7,7,8,9,10,10]));



// Bài 4 : Tạo dữ liệu của 3 nhân viên Future Academy(gồm tên, tuổi, mức lương, chức vụ). 
// Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). 

 
let Employee = [{
    id:1,
    Ten: 'Hoàng Anh',
    Tuoi: '27',
    Luong: '15000000',
    Chucvu: 'Quản Lý',
 },
 {   
 Ten: 'Đăng Sơn',
 Tuoi: '25',
 Luong: '12000000',
 Chucvu: 'Nhân Viên',
},
{
Ten: 'Thắng',
Tuoi: '26',
Luong: '12000000',
Chucvu: 'Nhan Vien',
},
];
while(true){
    let n = prompt("Enter your command(Read, Create, Update, Delete)");

if (n ==='Create'){
    let ten = prompt("Nhập tên: ");
    let tuoi = prompt("Nhập tuổi: ");
    let luong = prompt("Lương: ");
    let chucvu = prompt("Chức vụ: ");
     let newEmployee = {
         Ten:ten,
         Tuoi: tuoi,
         Luong:luong,
         Chucvu:chucvu
     }
     Employee.push(newEmployee);
console.table(Employee);
    }

else if(n ==='Read')
{
console.table(Employee);
}
else if(n ==='Update')
{
    let position=prompt('Nhập vi tri: ');
    let newname=prompt('Nhập vào tên muốn sửa: ');
        Employee[position-1].Ten=newname;
       
        for(let i=0; i < Employee.length; i++)
        {
            console.Table(Employee);
        }
}
else if(n ==='Delete')
{
    let position=prompt('Nhập vi tri: ');
        Employee.splice(position-1,1)
        for(let i=0; i < Employee.length; i++)
        {
       console.table(Employee);
        }
    }
else{
    break;
}
}








