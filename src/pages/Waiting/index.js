import React, { Component } from "react";

import "./index.scss";

class WaitingPage extends Component {

    render() {

        return (
            <main classNameName="waiting-page main">
                <div className="cover"></div>
                <div className="container mt-4 mb-4 d-flex justify-content-center">
                    <div className="card w-100">
                        <div className="card-body">
                            <h5 className="card-title">Ваша заявка принята</h5>
                            <p className="card-text">В течение 2 дней ваша заявка будет проверена выбранными банками и вы получите уведомление в личном кабинете и на почту.</p>
                            <div className="d-block d-flex justify-content-center mt-4">
                                <div className="loader"></div>
                            </div>
                            <br />
                            <a href="#" className="btn btn-primary float-right mt-4">Вернуться</a>
                        </div>
                    </div>

                </div>
                <div className="container mb-4">
                    <div className="card w-100">
                        <div className="card-header">
                            Этапы рассмотрения заявки
                        </div>
                        <div className="progress mt-2 mb-2 ml-2 mr-2">
                            <div className="progress-bar" role="progressbar"
                             style={{
                                 width: "25%"
                             }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Проверка документов
                            {/* <i className="fas fa-check float-right"></i> */}
                            <img src="/check-solid.svg" alt="" />
                            </li>
                            <li className="list-group-item">Проверка заемщика</li>
                            <li className="list-group-item">Окончательное принятие решения</li>
                        </ul>
                    </div>
                </div>
            </main>)
    }
}

export default WaitingPage;
