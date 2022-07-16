import React, { Component } from 'react'

export default class Databinding extends Component {
    userName = 'louishoang@gmail.com';
    showInfo() {
        return 'Hello Nigga!';
    }
    renderCard = () => {
        return <div>
            userName: {this.userName}
            <img src="https://picsum.photos/200/200" alt="..." />
        </div>
    }
    //Phương thức render
  render() {
    //Biến và hàm thig khi khai báo phải có var let const
    const hoTen = 'Louis';
    const tinhDiemTrungBinh = (diemToan,diemVan) => {
        return (diemToan+diemVan)/2;
    }


    return (
      <div>Databinding
        <p id='hoTen'>Họ tên : {hoTen}</p>
        <p>Điểm trung bình: {tinhDiemTrungBinh(8,2)}</p>
        <hr />
        <p>{this.showInfo()}</p>
        <div>
            {this.renderCard()}
        </div>
      </div>
    )
  }
}
